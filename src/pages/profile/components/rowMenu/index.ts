import template from './rowMenu.hbs';
import Block from '../../../../utils/chore/Block';
import rowStyles from '../index.module.css';
import styles from './rowMenu.module.css';
import {Link} from "../../../../components/link";
import AuthController from "../../../../controllers/AuthController";
import {Button} from "../../../../components/button";

interface RowMenuProps {
    to: string,
    title: string,
    exit: boolean,
}

export class RowMenu extends Block<RowMenuProps> {
    constructor(props: RowMenuProps) {
        super('div', props)
        this.element?.classList.add(rowStyles['row-profile'])
    }

    init() {
        if (!this.props.exit) {
            this.children.link = new Link({
                label: this.props.title,
                to: this.props.to,
            });
        } else {
            this.children.link = new Button({
                text: this.props.title,
                events: {
                    click: () => AuthController.logout()
                },
            });
        }


        this.children.link.getContent().classList.add(styles.link);
        this.props.exit
            ? this.children.link.getContent().classList.add(styles.exit)
            : this.children.link.getContent().classList.add(styles.normal);
    }

    render() {
        return this.compile(template, {})
    }
}
