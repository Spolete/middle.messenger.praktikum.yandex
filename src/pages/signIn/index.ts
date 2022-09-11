import Block from '../../utils/Block';
import template from './signIn.hbs';
import {Button} from "../../components/button";
import styles from '../index.module.css';
import stylesGlobal from '../../index.module.css';
import {InputContainer} from "../../components/inputContainer";


interface SignInProps {
}

export class SignIn extends Block<SignInProps> {
    constructor(props?: SignInProps) {
        super('div', props)
        this.element?.classList.add(stylesGlobal.main)
    }

    init() {
        this.children.button = new Button({
            text: 'Войти',
            events: {
                click: () => {
                    this.submit()
                }
            }
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

        this.children.inputPassword = new InputContainer({
            type: 'password',
            placeholder: 'Пароль',
            name: 'password',
            id: 'password',
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
        return this.compile(template, {stylesGlobal, styles})
    }
}
