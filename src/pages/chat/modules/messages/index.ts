import template from './messages.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './messages.module.css'
import {Message} from "../../components/message";
import {Message as MessagesInfo} from '../../../../controllers/MessagesController';
import {withSelectedChatMessages} from "../../../../hocs/withStore";

interface MessagesProps {
    messages: MessagesInfo[],
}

export class MessagesBase extends Block<MessagesProps> {
    constructor(props: MessagesProps) {
        super('div', props);
        this.element?.classList.add(styles.messages);
    }

    init() {
        this.children.messages = this.createMessages(this.props);
    }

    protected componentDidUpdate(oldProps: MessagesProps, newProps: MessagesProps) {
        this.children.messages = this.createMessages(newProps);
        return true;
    }

    private createMessages(props: MessagesProps) {
        return props.messages.map(data => {
            return new Message(data);
        })
    }

    render() {
        return this.compile(template, {
            messages: this.props.messages,
        })
    }
}

export const Messages = withSelectedChatMessages(MessagesBase);
