import template from './menu.hbs';
import styles from "./menu.module.css";
import Block from "../../utils/chore/Block";

interface MenuProps {}

export class Menu extends Block<MenuProps> {
    constructor() {
        super('div');
        this.element?.classList.add(styles.menu)
    }

    render() {
        return this.compile(template, {})
    }
}
