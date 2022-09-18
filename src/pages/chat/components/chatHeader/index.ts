import template from './chatHeader.hbs';
import Block from '../../../../utils/Block';
import styles from './chatHeader.module.css'

interface ChatHeaderProps {
    name: string,
    info: string,
    avatar: string,
    text: string,
}

export class ChatHeader extends Block<ChatHeaderProps> {
    constructor(props: ChatHeaderProps) {
        super('div', props)
        this.element?.classList.add(styles.header)
    }


    render() {
        return this.compile(template, {
            name: this.props.name,
            info: this.props.info,
            avatar: this.props.avatar,
            text: this.props.text,
            styles
        })
    }
}
