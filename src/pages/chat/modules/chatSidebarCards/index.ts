import template from './chatSidebarCards.hbs';
import Block from '../../../../utils/Block';
import styles from './chatSidebarCards.module.css';
import {ChatCard} from "../../components/chatCard";

interface ChatSidebarCardsProps {
    chatCards: ChatCard[]
}

export class ChatSidebarCards extends Block<ChatSidebarCardsProps> {
    constructor(props?: ChatSidebarCardsProps) {
        super('div', props)
        this.element?.classList.add(styles['sidebar-cards'])
    }

    render() {
        return this.compile(template, {
            chatCards: this.props.chatCards,
            styles
        })
    }
}
