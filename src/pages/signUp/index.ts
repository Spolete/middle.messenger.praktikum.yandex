import Block from '../../utils/chore/Block';
import template from './signUp.hbs';
import {Button} from "../../components/button";
import styles from '../index.module.css';
import stylesGlobal from '../../index.module.css';
import {InputContainer} from "../../components/inputContainer";
import {Link} from "../../components/link";
import AuthController from "../../controllers/AuthController";
import {SignupData} from "../../api/AuthAPI";

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

        this.children.link = new Link({
            label: 'Есть аккаунт?',
            to: '/'
        });

        this.children.link.getContent().classList.add(styles.link)
    }

    submit() {
        let isValid = true;

        const values = Object
            .values(this.children)
            .filter(child => child instanceof InputContainer && child.props.name !== 'password2')
            .map(child => {
                if (!child.props.isValid || child.props.value === '') {
                    isValid = false;
                }
                return [child.props.name, child.props.value]
            })

        const data = Object.fromEntries(values);

        if (isValid) {
            AuthController.signup(data as SignupData);
        }
    }

    render() {
        return this.compile(template, {styles, stylesGlobal})
    }
}
