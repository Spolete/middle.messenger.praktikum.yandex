import template from './message.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './message.module.css'
import {Message as MessageInfo} from "../../../../controllers/MessagesController";
import {withUser} from "../../../../hocs/withStore";
import {formatDate} from "../../../../utils/formatDate";

export class MessageBase extends Block<MessageInfo> {
    constructor(props: MessageInfo) {
        super('div', props)
        this.element?.classList.add(styles.message)
        if (this.props) {
            if (this.props.user_id === this.props.user.id) {
                this.element?.classList.add(styles['message-my'])
            }
        }
    }


    render() {
        return this.compile(template, {
            text: this.props.content,
            date: formatDate(this.props.time),
            styles
        })
    }
}

export const Message = withUser(MessageBase)
