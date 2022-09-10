import Block from '../../utils/Block';
import template from './signUp.hbs';
import {Button} from "../../components/button";
import {Input} from "../../components/input";
import styles from '../index.module.css';
import stylesGlobal from '../../index.module.css';


interface SignInProps {}

export class SignUp extends Block<SignInProps> {
    constructor(props: SignInProps) {
        super('div', props)
        this.element?.classList.add(stylesGlobal.main)
    }

    init() {
        this.children.button = new Button({
            text: 'Продолжить',
            events: {
                click: (event: Event) => {
                    event.preventDefault();
                }
            }
        });

        this.children.inputEmail = new Input({
            type: 'email',
            placeholder: 'Почта',
            name: 'email',
            id: 'email',
            error: 'Это поле должно содержать email в формате example@site.com',
            value: '',
            events: {
                change: (event) => {
                    event.preventDefault();
                }
            }
        });

        this.children.inputLogin = new Input({
            type: 'text',
            placeholder: 'Логин',
            name: 'login',
            id: 'login',
            error: '',
            value: '',
            events: {
                change: (event) => {
                    event.preventDefault();
                }
            }
        });

        this.children.inputName = new Input({
            type: 'text',
            placeholder: 'Имя',
            name: 'name',
            id: 'name',
            error: '',
            value: '',
            events: {
                change: (event) => {
                    event.preventDefault();
                    console.log(event)
                }
            }
        });

        this.children.inputSurname = new Input({
            type: 'text',
            placeholder: 'Фамилия',
            name: 'surname',
            id: 'surname',
            error: '',
            value: '',
            events: {
                change: (event) => {
                    event.preventDefault();
                    console.log(event)
                }
            }
        });

        this.children.inputTel = new Input({
            type: 'tel',
            placeholder: 'Телефон',
            name: 'tel',
            id: 'tel',
            error: '',
            value: '',
            events: {
                change: (event) => {
                    event.preventDefault();
                    console.log(event)
                }
            }
        });

        this.children.inputPassword = new Input({
            type: 'password',
            placeholder: 'Пароль',
            name: 'password',
            id: 'password',
            error: '',
            value: '',
            events: {
                change: (event) => {
                    event.preventDefault();
                    console.log(event)
                }
            }
        });

        this.children.inputPassword2 = new Input({
            type: 'password',
            placeholder: 'Повторите пароль',
            name: 'password2',
            id: 'password2',
            error: '',
            value: '',
            events: {
                change: (event) => {
                    event.preventDefault();
                    console.log(event)
                }
            }
        });
    }

    render() {
        return this.compile(template, {styles, stylesGlobal})
    }
}
