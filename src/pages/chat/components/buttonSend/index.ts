import Block from '../../../../utils/chore/Block';
import template from './button.hbs';
import styles from './button.module.css';

interface ButtonProps {
    events: {
        click: (event: Event) => void,
    }
}

export class ButtonSend extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super('button', props);
        this.element?.classList.add(styles['send-message'])
    }

    render() {
        return this.compile(template, {styles})
    }
}
