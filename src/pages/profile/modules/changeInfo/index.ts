import template from './changeInfo.hbs';
import Block from '../../../../utils/Block';
import globalStyles from '../../../../index.module.css';
import styles from '../index.module.css';
import {Avatar} from "../../components/avatar";
import {RowChange} from "../../components/rowChange";
import {Button} from "../../../../components/button";

interface ProfileChangeInfoProps {
}

export class ProfileChangeInfo extends Block<ProfileChangeInfoProps> {
    constructor(props?: ProfileChangeInfoProps) {
        super('div', props)
        this.element?.classList.add(globalStyles.main)
    }

    init() {
        this.children.avatar = new Avatar({name: 'Иван', change: true})
        this.children.rowChangeEmail = new RowChange({
            type: 'email',
            title: 'Почта',
            placeholder: 'pochta@yandex.ru',
            id: 'email',
            name: 'email'
        })
        this.children.rowChangeLogin = new RowChange({
            type: 'text',
            title: 'Логин',
            placeholder: 'ivanivanov',
            id: 'email',
            name: 'login'
        })
        this.children.rowChangeName = new RowChange({
            type: 'text',
            title: 'Имя',
            placeholder: 'Иван',
            id: 'email',
            name: 'name'
        })
        this.children.rowChangeSurname = new RowChange({
            type: 'text',
            title: 'Фамилия',
            placeholder: 'Иванов',
            id: 'email',
            name: 'surname'
        })
        this.children.rowChangeNameChat = new RowChange({
            type: 'text',
            title: 'Имя в чате',
            placeholder: 'Иван',
            id: 'email',
            name: 'nameChat'
        })
        this.children.rowChangeTel = new RowChange({
            type: 'tel',
            title: 'Телефон',
            placeholder: '+7 (909) 967 30 30',
            id: 'email',
            name: 'tel'
        })
        this.children.button = new Button({
            text: 'Сохранить', events: {
                click: () => console.log(this)
            }
        })
    }

    render() {
        return this.compile(template, {styles})
    }
}