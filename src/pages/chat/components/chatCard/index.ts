import template from './chatCard.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './chatCard.module.css'
import {User} from "../../../../api/AuthAPI";
import {withSelectedChat} from "../../../../hocs/withStore";
import {ChatInfo} from "../../../../api/ChatsAPI";
import {formatDate} from "../../../../utils/formatDate";

export interface ChatCardProps {
    selectedChat: ChatInfo,
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: User,
        time: string;
        content: string;
    }
    events: {
        click: () => void
    }
}

class ChatCardBase extends Block<ChatCardProps> {
    constructor(props: ChatCardProps) {
        super('div', props)
        this.element?.classList.add(styles.card)
    }

    protected render() {
        if (this.props.selectedChat?.id === this.props.id) {
            this.element?.classList.add(styles['card-selected'])
        }

        return this.compile(template, {
            avatar: this.props.avatar,
            name: this.props.title,
            date: formatDate(this.props.last_message?.time),
            text: this.props.last_message?.content,
            unreadCount: this.props.unread_count,
            isSelected: this.props.selectedChat?.id === this.props.id,
            styles
        })
    }
}

export const ChatCard = withSelectedChat(ChatCardBase);
