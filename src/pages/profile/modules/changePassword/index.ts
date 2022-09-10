import template from './changePassword.hbs';
import Block from '../../../../utils/Block';
import globalStyles from '../../../../index.module.css';
import styles from '../index.module.css';
import {Avatar} from "../../components/avatar";
import {RowChange} from "../../components/rowChange";
import {Button} from "../../../../components/button";

interface ProfileChangePasswordProps {
}

export class ProfileChangePassword extends Block<ProfileChangePasswordProps> {
    constructor(props?: ProfileChangePasswordProps) {
        super('div', props)
        this.element?.classList.add(globalStyles.main)
    }

    init() {
        this.children.avatar = new Avatar({name: 'Иван', change: true});
        this.children.rowChangePrev = new RowChange({
            type: 'password',
            title: 'Старый пароль',
            placeholder: 'Введите старый пароль',
            id: 'password',
            name: 'password'
        });
        this.children.rowChangeNew = new RowChange({
            type: 'password',
            title: 'Новый пароль',
            placeholder: 'Введите новый пароль',
            id: 'password',
            name: 'password'
        });
        this.children.rowChangeNewSecond = new RowChange({
            type: 'password',
            title: 'Повторите пароль',
            placeholder: 'Повторите новый пароль',
            id: 'password',
            name: 'password'
        });
        this.children.button = new Button({
            text: 'Сохранить', events: {
                click: () => console.log(this)
            }
        });
    }

    render() {
        return this.compile(template, {styles})
    }
}