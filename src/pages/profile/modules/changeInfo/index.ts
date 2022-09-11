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
            title: 'Почта',
            type: 'email',
            placeholder: 'pochta@yandex.ru',
            id: 'email',
            name: 'email',
            error: 'Это поле должно содержать email в формате example@site.com',
            value: '',
            isValid: true,
        })
        this.children.rowChangeLogin = new RowChange({
            title: 'Логин',
            type: 'text',
            placeholder: 'Логин',
            id: 'login',
            name: 'login',
            error: 'От 3 до 20 символов, латиница, может содержать цифры',
            value: '',
            isValid: true,
        })
        this.children.rowChangeName = new RowChange({
            type: 'text',
            title: 'Имя',
            placeholder: 'Иван',
            id: 'first_name',
            name: 'first_name',
            error: 'Первая буква должна быть заглавной, без пробелов и без цифр',
            value: '',
            isValid: true,
        })
        this.children.rowChangeSurname = new RowChange({
            type: 'text',
            title: 'Фамилия',
            placeholder: 'Иванов',
            id: 'second_name',
            name: 'second_name',
            error: 'Первая буква должна быть заглавной, без пробелов и без цифр',
            value: '',
            isValid: true,
        })
        this.children.rowChangeNameChat = new RowChange({
            type: 'text',
            title: 'Имя в чате',
            placeholder: 'Иван',
            id: 'nameChat',
            name: 'nameChat',
            error: ' ',
            value: '',
            isValid: true,
        })
        this.children.rowChangeTel = new RowChange({
            type: 'tel',
            title: 'Телефон',
            placeholder: '+7 (909) 967 30 30',
            id: 'phone',
            name: 'phone',
            error: 'От 10 до 15 символов, состоит из цифр',
            value: '',
            isValid: true,
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
        const submitData: Record<string, string> = {}

        Object.keys(this.children).forEach(key => {
            if (this.children[key] instanceof RowChange) {
                submitData[this.children[key].props.id] = this.children[key].props.value;
                if (!this.children[key].props.isValid) {
                    isValid = false;
                }
            }
        });

        console.log('isValid: ', isValid);
        console.log('submitData: ', submitData);
    }

    render() {
        return this.compile(template, {styles})
    }
}
