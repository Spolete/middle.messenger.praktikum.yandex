import Block from '../../utils/chore/Block';
import template from './chat.hbs';
import styles from './chat.module.css';
import {Chat} from "./modules/chat";
import {ChatSidebar} from "./modules/chatSidebar";
import ChatsController from "../../controllers/ChatsController";

export class ChatPage extends Block {
    constructor() {
        super('div')
        this.element?.classList.add(styles.root)
    }

    init() {
        ChatsController.fetchChats();

        this.children.left = new ChatSidebar();
        this.children.right = new Chat();
    }

    render() {
        return this.compile(template, {styles})
    }
}
