import template from './chatSidebar.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './chatSidebar.module.css';
import {ChatSidebarHeader} from "../../components/chatSidebarHeader";
import {ChatSidebarCards} from "../chatSidebarCards";

export class ChatSidebar extends Block {
    constructor() {
        super('div')
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


