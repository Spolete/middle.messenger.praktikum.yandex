import template from './rowChange.hbs';
import Block from '../../../../utils/chore/Block';
import {HTMLInputTypeAttribute} from '../../../../typings/types';
import rowStyles from '../index.module.css';
import styles from './rowChange.module.css';
import {Input} from "../../../../components/input";
import validInput from "../../../../utils/validateInput";

interface RowChangeProps {
    title: string,
    type: HTMLInputTypeAttribute,
    placeholder: string,
    name: string,
    id: string,
    error: string,
    value: string,
    isValid: boolean,
}


export class RowChange extends Block<RowChangeProps> {
    constructor(props: RowChangeProps) {
        super('div', props);
        this.element?.classList.add(rowStyles['row-profile'])
        this.element?.classList.add(styles['row-input'])
    }

    init() {
        this.children.input = new Input({
            placeholder: this.props.placeholder,
            type: this.props.type,
            name: this.props.name,
            id: this.props.id,
            events: {
                blur: (event: any): void => {
                    this.validateInput(event.target.name, event.target.value)
                }
            }
        })
        this.children.input.element.classList.add(styles.input)
    }

    validateInput(name: string, value: string) {
        this.props.value = value;
        if (validInput(name, value)) {
            this.props.isValid = true;
            this.element?.classList.remove(styles['input-error-display'])
        } else {
            this.props.isValid = false;
            this.element?.classList.add(styles['input-error-display'])
        }
    }

    render() {
        return this.compile(template, {
            title: this.props.title,
            placeholder: this.props.placeholder,
            name: this.props.name,
            error: this.props.error,
            isValid: this.props.isValid,
            styles,
            rowStyles
        })
    }
}
