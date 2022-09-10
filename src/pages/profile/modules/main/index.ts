import template from './main.hbs';
import Block from '../../../../utils/Block';
import globalStyles from '../../../../index.module.css';
import styles from '../index.module.css';
import {Row} from "../../components/row";
import {RowMenu} from "../../components/rowMenu";
import {Avatar} from "../../components/avatar";

interface ProfileProps {
}

export class Profile extends Block<ProfileProps> {
    constructor(props: ProfileProps) {
        super('div', props)
        this.element?.classList.add(globalStyles.main)
    }

    init() {
        this.children.avatar = new Avatar({name: 'Иван', change: false})
        this.children.rowEmail = new Row({title: 'Почта', data: 'pochta@yandex.ru'})
        this.children.rowLogin = new Row({title: 'Логин', data: 'ivanivanov'})
        this.children.rowName = new Row({title: 'Имя', data: 'Иван'})
        this.children.rowSurname = new Row({title: 'Фамилия', data: 'Иванов'})
        this.children.rowNameChat = new Row({title: 'Имя в чате', data: 'Иван'})
        this.children.rowTel = new Row({title: 'Телефон', data: '+7 (909) 967 30 30'})
        this.children.rowMenuInfo = new RowMenu({href: 'profileChangeInfo', title: 'Изменить данные', exit: false})
        this.children.rowMenuPassword = new RowMenu({
            href: 'profileChangePassword', title: 'Изменить пароль', exit: false
        })
        this.children.rowMenuExit = new RowMenu({href: 'signIn', title: 'Выход', exit: true})
    }

    render() {
        return this.compile(template, {styles})
    }
}