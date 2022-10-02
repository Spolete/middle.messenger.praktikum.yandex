import Block from '../../../../utils/chore/Block';
import template from './button.hbs';
import styles from './button.module.css';

interface ButtonProps {
    events: {
        click: (event: Event) => void,
    }
}

export class ButtonDelete extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super('button', props);
        this.element?.classList.add(styles['delete-chat'])
    }

    render() {
        return this.compile(template, {text: 'Удалить чат', styles})
    }
}
