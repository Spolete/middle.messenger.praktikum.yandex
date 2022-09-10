import Block from '../../utils/Block';
import template from './signIn.hbs';
import {Button} from "../../components/button";
import {Input} from "../../components/input";
import styles from '../index.module.css';
import stylesGlobal from '../../index.module.css';


interface SignInProps {}

export class SignIn extends Block<SignInProps> {
    constructor(props: SignInProps) {
        super('div', props)
        this.element?.classList.add(stylesGlobal.main)
    }

    init() {
        this.children.button = new Button({
            text: 'Войти',
            events: {
                click: () => {
                    console.log(this);
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
                }
            }

        });
    }

    render() {
        return this.compile(template, {stylesGlobal, styles})
    }
}
