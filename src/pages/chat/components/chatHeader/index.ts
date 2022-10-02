import template from './chatHeader.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './chatHeader.module.css'
import {Input} from "../../../../components/input";
import {ButtonAdd} from "../buttonAdd";
import ChatsController from "../../../../controllers/ChatsController";
import {ButtonDelete} from "../buttonDelete";
import {withStore} from "../../../../hocs/withStore";
import UserController from "../../../../controllers/UserController";

interface ChatHeaderProps {
    name: string,
    info: string,
    avatar: string,
    text: string,
}

class ChatHeaderBase extends Block<ChatHeaderProps> {
    constructor(props: ChatHeaderProps) {
        super('div', props)
        this.element?.classList.add(styles.header)
    }

    init() {
        this.children.input = new Input({
            placeholder: 'Введите логин пользователя для добавления в чат',
            type: 'text',
            name: 'message',
            id: 'message'
        })
        this.children.buttonAdd = new ButtonAdd({
            events: {
                click: async () => {
                    const input = this.children.input as Input;
                    const login = input.getValue();
                    input.setValue('')
                    const searhedUsers = await UserController.search({login});
                    console.log(searhedUsers)
                    if (searhedUsers.length === 0) {
                        return
                    }
                    console.log(this.props.chats)
                    for (const searhedUser of Array.from(searhedUsers)) {
                        if (searhedUser.login === login) {
                            ChatsController.addUserToChat(this.props.selectedChat, searhedUser.id)
                        }
                    }
                }
            }
        })

        this.children.buttonDelete = new ButtonDelete({
            events: {
                click: async () => {
                    ChatsController.deleteChat(this.props.selectedChat);
                }
            }
        })

        this.children.input.getContent().classList.add(styles['sidebar-search']);
    }


    render() {
        const title = this.props.chats?.find(chat => chat?.id === this.props.selectedChat)?.title
        return this.compile(template, {
            name: title,
            info: this.props.info,
            avatar: this.props.avatar,
            text: this.props.text,
            styles
        })
    }
}

export const
    ChatHeader = withStore((state) => state)(ChatHeaderBase)
