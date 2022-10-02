import Block from '../../utils/chore/Block';
import template from './button.hbs';
import styles from './button.module.css';

interface ButtonProps {
    text: string;
    events: {
        click: (event: Event) => void,
    }
}

export class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super('button', props);
        this.element?.classList.add(styles.button)
    }

    render() {
        return this.compile(template, {text: this.props.text})
    }
}
