import { expect } from 'chai';
import  Block from './Block'

describe('Block', () => {
    let isDidMount = false;
    let isRender = false;
    let isRenderAfterUpdateProps = false;

    interface ComponentMockProps {
        class? : string
    }
    class ComponentMock extends Block {

        constructor(props?: ComponentMockProps) {
            super('div',props);
            this.props.class = this.props?.class ?? 'test';
        }

        init(): void {
            this.dispatchComponentDidMount();
        }

        componentDidMount() {
            isDidMount = true;
        }

        render() {
            isRender = true;

            if (this.props.class === 'updated-test') {
                isRenderAfterUpdateProps = true;
            }
            const html = '<div class="test">Test</div>';

            const temp = document.createElement('template');

            temp.innerHTML = html;
            return temp.content;
        }
    }
    const component = new ComponentMock();

    it('the init event should be triggered during initialization',  () => {
        const componentWithDefaultProps = new ComponentMock();
        expect(componentWithDefaultProps.props.class).to.eq('test');
    });

    it('an instance of the block with user details must be created', () => {
        const componentWithCustomProps = new ComponentMock({
            class: 'custom-class',
        });
        expect(componentWithCustomProps.props.class).to.eq('custom-class');
    });

    it('the component was actually mounted', () => {
        expect(isDidMount).to.eq(true);
    });
    //
    it('the component has done the rendering', () => {
        expect(isRender).to.eq(true);
    });

    it('the content should have been set', () => {
        expect(component.getContent()?.textContent).to.eq('Test');
    });

    it('updating props', () => {
        component.setProps({
            class: 'updated-test',
        });
        expect(component.props.class).to.eq('updated-test');
    });

    it('rendering after updating the props', () => {
        expect(isRenderAfterUpdateProps).to.eq(true);
    });

    it('install new props', () => {
        component.setProps({
            text: 'Hello',
        });
        expect(component.props.text).to.eq('Hello');
    });
});
