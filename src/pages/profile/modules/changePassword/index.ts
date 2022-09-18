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
            id: 'password1',
            name: 'password',
            error: 'От 8 до 40 символов, одна заглавная буква и цифра',
            value: '',
            isValid: true
        });
        this.children.rowChangeNew = new RowChange({
            type: 'password',
            title: 'Новый пароль',
            placeholder: 'Введите новый пароль',
            id: 'password2',
            name: 'password',
            error: 'От 8 до 40 символов, одна заглавная буква и цифра',
            value: '',
            isValid: true
        });
        this.children.rowChangeNewSecond = new RowChange({
            type: 'password',
            title: 'Повторите пароль',
            placeholder: 'Повторите новый пароль',
            id: 'password3',
            name: 'password',
            error: 'От 8 до 40 символов, одна заглавная буква и цифра',
            value: '',
            isValid: true,
        });
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
