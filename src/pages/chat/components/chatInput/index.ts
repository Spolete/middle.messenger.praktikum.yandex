import template from './chatInput.hbs';
import Block from '../../../../utils/Block';
import styles from './chatInput.module.css'

interface ChatInputProps {
}


export class ChatInput extends Block<ChatInputProps> {
    constructor(props?: ChatInputProps) {
        super('div', props)
        this.element?.classList.add(styles['chat-input'])
    }


    render() {
        return this.compile(template, {
            styles
        })
    }
}
