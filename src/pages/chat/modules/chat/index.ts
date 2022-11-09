import template from './chat.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './chat.module.css'
import {ChatHeader} from "../../components/chatHeader";
import {Messages} from "../messages";
import {ChatInput} from "../../components/chatInput";
import {withSelectedChat} from "../../../../hocs/withStore";

interface ChatProps {
}

export class ChatBase extends Block<ChatProps> {
    constructor(props?: ChatProps) {
        super('div', props)
        this.element?.classList.add(styles.chat)
    }

    init() {
        this.children.chatHeader = new ChatHeader()
        this.children.messages = new Messages()
        this.children.chatInput = new ChatInput()
    }


    render() {
        return this.compile(template, {
            styles,
            selectedChat: this.props.selectedChat,
        })
    }
}

export const Chat = withSelectedChat(ChatBase);
