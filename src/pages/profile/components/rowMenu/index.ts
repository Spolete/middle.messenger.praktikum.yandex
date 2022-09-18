import template from './rowMenu.hbs';
import Block from '../../../../utils/Block';
import rowStyles from '../index.module.css';
import styles from './rowMenu.module.css';


interface RowMenuProps {
    href: string,
    title: string,
    exit: boolean,
}

export class RowMenu extends Block<RowMenuProps> {
    constructor(props: RowMenuProps) {
        super('div', props)
        this.element?.classList.add(rowStyles['row-profile'])
    }

    render() {
        const color = this.props.exit ? styles.exit : styles.normal;

        return this.compile(template, {
            href: this.props.href,
            title: this.props.title,
            color: color,
        })
    }
}
