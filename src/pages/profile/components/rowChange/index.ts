import template from './rowChange.hbs';
import Block from '../../../../utils/Block';
import {HTMLInputTypeAttribute} from '../../../../typings/types';
import rowStyles from '../index.module.css';
import styles from './rowChange.module.css';


interface RowChangeProps {
    title: string,
    type: HTMLInputTypeAttribute,
    name: string,
    placeholder: string,
    id: string,
}

export class RowChange extends Block<RowChangeProps> {
    constructor(props: RowChangeProps) {
        super('div', props)
        this.element?.classList.add(rowStyles['row-profile'])
        this.element?.classList.add(styles['row-input'])
    }

    render() {
        return this.compile(template, {
            title: this.props.title,
            type: this.props.type,
            name: this.props.name,
            placeholder: this.props.placeholder,
            id: this.props.id,
            styles,
            rowStyles
        })
    }
}
