import template from './chatSidebarCards.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './chatSidebarCards.module.css';
import {ChatCard} from "../../components/chatCard";
import {withChats} from "../../../../hocs/withStore";
import ChatsController from "../../../../controllers/ChatsController";
import {ChatInfo} from "../../../../api/ChatsAPI";

interface ChatSidebarCardsProps {
    chats: ChatInfo[];
}

export class ChatSidebarCardsBase extends Block<ChatSidebarCardsProps> {
    constructor(props?: ChatSidebarCardsProps) {
        super('div', props)
        this.element?.classList.add(styles['sidebar-cards'])
    }

    protected init() {
        this.children.chats = this.createChats(this.props)
    }

    protected componentDidUpdate(oldProps: ChatSidebarCardsProps, newProps: ChatSidebarCardsProps) {
        this.children.chats = this.createChats(newProps);
        return true;
    }

    private createChats(props: ChatSidebarCardsProps) {
        return props.chats.map(data => {
            return new ChatCard({
                ...data,
                events: {
                    click: () => {
                        ChatsController.selectChat(data.id)
                    }
                }})
        })
    }

    protected render() {
        return this.compile(template, {
            styles
        })
    }
}


export const ChatSidebarCards = withChats(ChatSidebarCardsBase)
