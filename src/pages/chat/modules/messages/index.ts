import template from './messages.hbs';
import Block from '../../../../utils/Block';
import styles from './messages.module.css'
import {Message} from "../../components/message";

interface MessagesProps {
    messages: Message[],
}

export class Messages extends Block<MessagesProps> {
    constructor(props: MessagesProps) {
        super('div', props)
        this.element?.classList.add(styles.messages)
    }


    render() {
        return this.compile(template, {
            messages: this.props.messages,
        })
    }
}
