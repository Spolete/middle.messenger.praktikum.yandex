import template from './menu.hbs';
import styles from "./menu.module.css";
import Block from "../../utils/chore/Block";

export class Menu extends Block {
    constructor() {
        super('div');
        this.element?.classList.add(styles.menu)
    }

    render() {
        return this.compile(template, {})
    }
}
