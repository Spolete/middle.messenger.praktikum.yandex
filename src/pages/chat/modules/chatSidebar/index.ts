import template from './chatSidebar.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './chatSidebar.module.css';
import {ChatSidebarHeader} from "../../components/chatSidebarHeader";
import {ChatSidebarCards} from "../chatSidebarCards";

interface ChatSidebarProps {}


export class ChatSidebar extends Block<ChatSidebarProps> {
    constructor(props?: ChatSidebarProps) {
        super('div', props)
        this.element?.classList.add(styles['chat-sidebar'])
    }

    init() {
        this.children.chatSidebarHeader = new ChatSidebarHeader()
        this.children.chatSidebarCards = new ChatSidebarCards()
    }


    render() {
        return this.compile(template, {
            styles
        })
    }
}


