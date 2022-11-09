import template from './row.hbs';
import Block from '../../../../utils/chore/Block';
import rowStyles from '../index.module.css';

interface RowProps {
    title: string,
    data: string,
}

export class Row extends Block<RowProps> {
    constructor(props: RowProps) {
        super('div', props)
        this.element?.classList.add(rowStyles['row-profile'])
    }

    render() {
        return this.compile(template, {
            title: this.props.title,
            data: this.props.data,
            rowStyles
        })
    }
}
