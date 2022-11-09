import template from './chatInput.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './chatInput.module.css'
import MessagesController from "../../../../controllers/MessagesController";
import {Input} from "../../../../components/input";
import {withSelectedChat} from "../../../../hocs/withStore";
import {ChatInfo} from "../../../../api/ChatsAPI";
import {ButtonSend} from "../buttonSend";

interface ChatInputProps {
    selectedChat: ChatInfo
}


export class ChatInputBase extends Block<ChatInputProps> {
    constructor(props?: ChatInputProps) {
        super('div', props)
        this.element?.classList.add(styles['chat-input'])
    }

    init() {
        this.children.input = new Input({
            placeholder: 'Введите текст сообщения...',
            type: 'text',
            name: 'message',
            id: 'message'
        })
        this.children.button = new ButtonSend({
            events: {
                click: () => {
                    const input = this.children.input as Input;
                    const message = input.getValue();

                    input.setValue('');
                    MessagesController.sendMessage(this.props.selectedChat.id, message);
                }
            }
        })

        this.children.input.getContent().classList.add(styles['message-text']);
    }


    render() {
        return this.compile(template, {
            styles
        })
    }
}

export const ChatInput = withSelectedChat(ChatInputBase)
