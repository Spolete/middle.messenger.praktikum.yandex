import Block from '../../utils/Block';
import template from './signUp.hbs';
import {Button} from "../../components/button";
import styles from '../index.module.css';
import stylesGlobal from '../../index.module.css';
import {InputContainer} from "../../components/inputContainer";


interface SignInProps {
}

export class SignUp extends Block<SignInProps> {
    constructor(props?: SignInProps) {
        super('div', props)
        this.element?.classList.add(stylesGlobal.main)
    }

    init() {
        this.children.button = new Button({
            text: 'Продолжить',
            events: {
                click: () => {
                    this.submit()
                }
            }
        });

        this.children.inputEmail = new InputContainer({
            type: 'email',
            placeholder: 'Почта',
            name: 'email',
            id: 'email',
            error: 'Это поле должно содержать email в формате example@site.com',
            value: '',
            isValid: true,
        });

        this.children.inputLogin = new InputContainer({
            type: 'text',
            placeholder: 'Логин',
            name: 'login',
            id: 'login',
            error: 'От 3 до 20 символов, латиница, может содержать цифры',
            value: '',
            isValid: true,
        });

        this.children.inputName = new InputContainer({
            type: 'text',
            placeholder: 'Имя',
            name: 'first_name',
            id: 'first_name',
            error: 'Первая буква должна быть заглавной, без пробелов и без цифр',
            value: '',
            isValid: true,
        });

        this.children.inputSurname = new InputContainer({
            type: 'text',
            placeholder: 'Фамилия',
            name: 'second_name',
            id: 'second_name',
            error: 'Первая буква должна быть заглавной, без пробелов и без цифр',
            value: '',
            isValid: true,
        });

        this.children.inputTel = new InputContainer({
            type: 'tel',
            placeholder: 'Телефон',
            name: 'phone',
            id: 'phone',
            error: 'От 10 до 15 символов, состоит из цифр',
            value: '',
            isValid: true,
        });

        this.children.inputPassword = new InputContainer({
            type: 'password',
            placeholder: 'Пароль',
            name: 'password',
            id: 'password',
            error: 'От 8 до 40 символов, одна заглавная буква и цифра',
            value: '',
            isValid: true,
        });

        this.children.inputPassword2 = new InputContainer({
            type: 'password',
            placeholder: 'Повторите пароль',
            name: 'password2',
            id: 'password2',
            error: 'От 8 до 40 символов, одна заглавная буква и цифра',
            value: '',
            isValid: true,
        });
    }

    submit() {
        let isValid = true;
        const submitData: Record<string, string> = {}

        Object.keys(this.children).forEach(key => {
            if (this.children[key] instanceof InputContainer) {
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
        return this.compile(template, {styles, stylesGlobal})
    }
}
