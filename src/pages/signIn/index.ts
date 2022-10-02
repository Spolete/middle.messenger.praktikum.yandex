import Block from '../../utils/chore/Block';
import template from './signIn.hbs';
import {Button} from "../../components/button";
import {Link} from "../../components/link";
import styles from '../index.module.css';
import stylesGlobal from '../../index.module.css';
import {InputContainer} from "../../components/inputContainer";
import AuthController from "../../controllers/AuthController";
import {SignupData} from "../../api/AuthAPI";


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

        this.children.link = new Link({
            label: 'Создать аккаунт',
            to: '/register'
        });

        this.children.link.getContent().classList.add(styles.link)
    }

    submit() {
        let isValid = true;

        const values = Object
            .values(this.children)
            .filter(child => child instanceof InputContainer && child.props.name !== 'password2')
            .map(child => {
                if (!child.props.isValid) {
                    isValid = false;
                }
                return [child.props.name, child.props.value]
            })

        const data = Object.fromEntries(values);

        if (isValid) {
            AuthController.signin(data as SignupData);
        }
    }

    render() {
        return this.compile(template, {stylesGlobal, styles})
    }
}
