import Block from '../../utils/Block';
import template from './chat.hbs';
import styles from './chat.module.css';
import {Chat} from "./modules/chat";
import {ChatSidebar} from "./modules/chatSidebar";

interface ChatPageProps {
}

export class ChatPage extends Block<ChatPageProps> {
    constructor(props?: ChatPageProps) {
        super('div', props)
        this.element?.classList.add(styles.root)
    }

    init() {
        this.children.right = new Chat();
        this.children.left = new ChatSidebar();
    }

    render() {
        return this.compile(template, {styles})
    }
}
