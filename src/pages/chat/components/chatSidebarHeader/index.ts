import template from './chatSidebarHeader.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './chatSidebarHeader.module.css'
import {Input} from "../../../../components/input";
import {ButtonAdd} from "../buttonAdd";
import ChatsController from "../../../../controllers/ChatsController";
import {withUserAndChats} from "../../../../hocs/withStore";
import {User} from "../../../../api/AuthAPI";

interface ChatSidebarHeaderProps {
    user: User
}


class ChatSidebarHeaderBase extends Block<ChatSidebarHeaderProps> {
    constructor(props?: ChatSidebarHeaderProps) {
        super('div', props)
        this.element?.classList.add(styles['sidebar-header'])
    }

    init() {
        this.children.input = new Input({
            placeholder: 'Введите название чата',
            type: 'text',
            name: 'message',
            id: 'message'
        })
        this.children.button = new ButtonAdd({
            events: {
                click: async () => {
                    const input = this.children.input as Input;
                    const title = input.getValue();
                    ChatsController.create(title);
                }
            }
        })

        this.children.input.getContent().classList.add(styles['sidebar-search']);
    }


    render() {
        return this.compile(template, {
            styles
        })
    }
}

export const
    ChatSidebarHeader = withUserAndChats(ChatSidebarHeaderBase)
