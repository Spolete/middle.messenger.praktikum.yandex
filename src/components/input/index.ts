import Block from "../../utils/Block";
import styles from "./input.module.css";
import template from "./input.hbs";
import {HTMLInputTypeAttribute} from '../../typings/types'

interface InputProps {
    type: HTMLInputTypeAttribute,
    placeholder: string,
    name: string,
    id: string,
    error: string,
    value: string,
    events: {
        change: (event: Event) => void,
    }
}


export class Input extends Block<InputProps> {
    constructor(props: InputProps) {
        super('div', props);
        this.element?.classList.add(styles.input)
    }

    render() {
        return this.compile(template, {
            type: this.props.type,
            placeholder: this.props.placeholder,
            name: this.props.name,
            id: this.props.id,
            error: this.props.error,
            styles
        })
    }
}