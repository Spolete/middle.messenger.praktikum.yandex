import template from './changeInfo.hbs';
import Block from '../../../../utils/chore/Block';
import globalStyles from '../../../../index.module.css';
import styles from '../index.module.css';
import {Avatar} from "../../components/avatar";
import {RowChange} from "../../components/rowChange";
import {Button} from "../../../../components/button";
import {withUser} from "../../../../hocs/withStore";
import UserController from "../../../../controllers/UserController";

interface ProfileChangeInfoProps {
    user: {
        first_name: string,
        email: string,
        login: string,
        second_name: string,
        display_name: string,
        phone: string,
    }
}

class ProfileChangeInfoBase extends Block<ProfileChangeInfoProps> {
    constructor(props?: ProfileChangeInfoProps) {
        super('div', props)
        this.element?.classList.add(globalStyles.main)
    }

    init() {
        this.children.avatar = new Avatar({
            name: this.props.user.first_name,
            change: true
        })
        this.children.rowChangeEmail = new RowChange({
            title: 'Почта',
            type: 'email',
            placeholder: this.props.user.email,
            id: 'email',
            name: 'email',
            error: 'Это поле должно содержать email в формате example@site.com',
            value: this.props.user.email,
            isValid: true
        })
        this.children.rowChangeLogin = new RowChange({
            title: 'Логин',
            type: 'text',
            placeholder: this.props.user.login,
            id: 'login',
            name: 'login',
            error: 'От 3 до 20 символов, латиница, может содержать цифры',
            value: this.props.user.login,
            isValid: true
        })
        this.children.rowChangeName = new RowChange({
            type: 'text',
            title: 'Имя',
            placeholder: this.props.user.first_name,
            id: 'first_name',
            name: 'first_name',
            error: 'Первая буква должна быть заглавной, без пробелов и без цифр',
            value: this.props.user.first_name,
            isValid: true
        })
        this.children.rowChangeSurname = new RowChange({
            type: 'text',
            title: 'Фамилия',
            placeholder: this.props.user.second_name,
            id: 'second_name',
            name: 'second_name',
            error: 'Первая буква должна быть заглавной, без пробелов и без цифр',
            value: this.props.user.second_name,
            isValid: true
        })
        this.children.rowChangeNameChat = new RowChange({
            type: 'text',
            title: 'Имя в чате',
            placeholder: this.props.user.display_name,
            id: 'display_name',
            name: 'display_name',
            error: ' ',
            value: this.props.user.display_name,
            isValid: true
        })
        this.children.rowChangeTel = new RowChange({
            type: 'tel',
            title: 'Телефон',
            placeholder: this.props.user.phone,
            id: 'phone',
            name: 'phone',
            error: 'От 10 до 15 символов, состоит из цифр',
            value: this.props.user.phone,
            isValid: true
        })
        this.children.button = new Button({
            text: 'Сохранить',
            events: {
                click: () => {
                    this.submit()
                }
            }
        })
    }

    submit() {
        let isValid = true;

        const values = Object
            .values(this.children)
            .filter(child => child instanceof RowChange)
            .map((child: RowChange) => {
                if (!child.props.isValid) {
                    isValid = false;
                }
                if (child.props.name === 'display_name' && child.props.value === null) {
                    return [child.props.name, `${this.props.user.first_name} ${this.props.user.second_name}`]
                } else {
                    return [child.props.name, child.props.value]
                }
            })

        const data = Object.fromEntries(values);

        if (isValid) {
            UserController.profile(data);
        }
    }

    render() {
        return this.compile(template, {styles})
    }
}

export const ProfileChangeInfo = withUser(ProfileChangeInfoBase);
