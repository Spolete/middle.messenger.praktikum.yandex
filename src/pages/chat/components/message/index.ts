import template from './message.hbs';
import Block from '../../../../utils/Block';
import styles from './message.module.css'

interface MessageProps {
    text: string,
    date: string,
    isMy: boolean,
}

export class Message extends Block<MessageProps> {
    constructor(props: MessageProps) {
        super('div', props)
        this.element?.classList.add(styles.message)
        if (this.props.isMy) {
            this.element?.classList.add(styles['message-my'])
        }
    }


    render() {
        return this.compile(template, {
            text: this.props.text,
            date: this.props.date,
            styles
        })
    }
}
