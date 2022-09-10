import template from './error.hbs';
import Block from '../../utils/Block';
import globalStyles from '../../index.module.css'
import styles from './error.module.css'

interface ErrorProps {
    errorCode: number,
    errorText: string,
}

export class ErrorPage extends Block<ErrorProps> {
    constructor(props: ErrorProps) {
        super('div', props)
        this.element?.classList.add(globalStyles.main)
    }

    render() {
        return this.compile(template, {
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
            styles
        })
    }
}