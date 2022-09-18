import template from './chatCard.hbs';
import Block from '../../../../utils/Block';
import styles from './chatCard.module.css'

interface ChatCardProps {
    name: string,
    date: string,
    text: string,
    avatar: string,
    unreadCount?: number,
    online: boolean,
}

export class ChatCard extends Block<ChatCardProps> {
    constructor(props: ChatCardProps) {
        super('div', props)
        this.element?.classList.add(styles.card)
        if (this.props.online) {
            this.element?.classList.add(styles['card-online'])
        }
    }


    render() {
        return this.compile(template, {
            avatar: this.props.avatar,
            name: this.props.name,
            date: this.props.date,
            text: this.props.text,
            unreadCount: this.props.unreadCount,
            styles
        })
    }
}
