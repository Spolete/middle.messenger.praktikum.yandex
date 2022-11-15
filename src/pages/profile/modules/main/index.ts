import template from './main.hbs';
import Block from '../../../../utils/chore/Block';
import globalStyles from '../../../../index.module.css';
import styles from '../index.module.css';
import {Row} from "../../components/row";
import {RowMenu} from "../../components/rowMenu";
import {Avatar} from "../../components/avatar";
import {Link} from "../../../../components/link";
import {withUser} from "../../../../hocs/withStore";

interface ProfileProps {
    user: {
        first_name: string,
        email: string,
        login: string,
        second_name: string,
        display_name: string,
        phone: string,
    }
}

class ProfilePageBase extends Block<ProfileProps> {
    constructor(props: ProfileProps) {
        super('div', props)
        this.element?.classList.add(globalStyles.main)
    }

    init() {
        this.children.link = new Link({label: 'Назад', to: '/chat'})
        this.children.avatar = new Avatar({name: this.props.user.first_name, change: false})
        this.children.rowEmail = new Row({title: 'Почта', data: this.props.user.email})
        this.children.rowLogin = new Row({title: 'Логин', data: this.props.user.login})
        this.children.rowName = new Row({title: 'Имя', data: this.props.user.first_name})
        this.children.rowSurname = new Row({title: 'Фамилия', data: this.props.user.second_name})
        this.children.rowNameChat = new Row({title: 'Имя в чате', data: this.props.user.display_name
                || `${this.props.user.first_name} ${this.props.user.second_name}`})
        this.children.rowTel = new Row({title: 'Телефон', data: this.props.user.phone})
        this.children.rowMenuInfo = new RowMenu({to: '/profileChangeInfo', title: 'Изменить данные', exit: false})
        this.children.rowMenuPassword = new RowMenu({
            to: '/profileChangePassword', title: 'Изменить пароль', exit: false
        })
        this.children.rowMenuExit = new RowMenu({to: '/', title: 'Выйти', exit: true})

        this.children.link.getContent().classList.add(styles.back)
    }

    render() {
        return this.compile(template, {styles})
    }
}

export const ProfilePage = withUser(ProfilePageBase);
