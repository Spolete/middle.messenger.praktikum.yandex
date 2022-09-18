import template from './chat.hbs';
import Block from '../../../../utils/Block';
import styles from './chat.module.css'
import {ChatHeader} from "../../components/chatHeader";
import {Messages} from "../messages";
import {Message} from "../../components/message";
import {ChatInput} from "../../components/chatInput";

interface ChatProps {
}

const messages = [
    new Message({isMy: false, text: 'Ну все стартап', date: '20:01'}),
    new Message({isMy: false, text: 'Пиши что он защищён фсо', date: '20:01'}),
    new Message({isMy: false, text: 'И все', date: '20:01'}),
    new Message({isMy: true, text: ')', date: '17:09'}),
    new Message({isMy: false, text: 'В общем, когда у тебя в компоненте элементы меняются в зависимости от модификатора общего, ты один раз вешаешь этот модификатор на корневой стиль и потом таким образом верстаешь', date: '09:09'}),
    new Message({isMy: false, text: 'Я щас для себя больше теорию изучаю и стараюсь какие нибудь практические задачи придумать', date: '09:09'}),
    new Message({isMy: true, text: 'Молодец', date: '09:09'}),
    new Message({isMy: true, text: 'Студия танцев какая-то была?', date: '09:09'}),
    new Message({isMy: false, text: 'Не мерил, но низкие , единственный минус (', date: '09:09'}),
    new Message({isMy: true, text: 'Была что-то типо продажа онлайн заготовок для всяких тортиком что-то такое', date: '09:09'}),
    new Message({isMy: false, text: 'Ну все стартап', date: '20:01'}),
    new Message({isMy: false, text: 'Пиши что он защищён фсо', date: '20:01'}),
    new Message({isMy: false, text: 'И все', date: '20:01'}),
    new Message({isMy: true, text: ')', date: '17:09'}),
    new Message({isMy: false, text: 'В общем, когда у тебя в компоненте элементы меняются в зависимости от модификатора общего, ты один раз вешаешь этот модификатор на корневой стиль и потом таким образом верстаешь', date: '09:09'}),
    new Message({isMy: false, text: 'Я щас для себя больше теорию изучаю и стараюсь какие нибудь практические задачи придумать', date: '09:09'}),
    new Message({isMy: true, text: 'Молодец', date: '09:09'}),
    new Message({isMy: true, text: 'Студия танцев какая-то была?', date: '09:09'}),
    new Message({isMy: false, text: 'Не мерил, но низкие , единственный минус (', date: '09:09'}),
    new Message({isMy: false, text: 'Ну все стартап', date: '20:01'}),
    new Message({isMy: false, text: 'Пиши что он защищён фсо', date: '20:01'}),
    new Message({isMy: false, text: 'И все', date: '20:01'}),
    new Message({isMy: true, text: ')', date: '17:09'}),
    new Message({isMy: false, text: 'В общем, когда у тебя в компоненте элементы меняются в зависимости от модификатора общего, ты один раз вешаешь этот модификатор на корневой стиль и потом таким образом верстаешь', date: '09:09'}),
    new Message({isMy: false, text: 'Я щас для себя больше теорию изучаю и стараюсь какие нибудь практические задачи придумать', date: '09:09'}),
    new Message({isMy: true, text: 'Молодец', date: '09:09'}),
    new Message({isMy: true, text: 'Студия танцев какая-то была?', date: '09:09'}),
    new Message({isMy: false, text: 'Не мерил, но низкие , единственный минус (', date: '09:09'}),
]

export class Chat extends Block<ChatProps> {
    constructor(props?: ChatProps) {
        super('div', props)
        this.element?.classList.add(styles.chat)
    }

    init() {
        this.children.chatHeader = new ChatHeader({
            avatar: 'https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg',
            name: 'Lisa',
            info: 'last seen recently',
            text: 'Был в сети недавно'
        })
        this.children.messages = new Messages({messages})
        this.children.chatInput = new ChatInput()
    }


    render() {
        return this.compile(template, {
            styles
        })
    }
}
