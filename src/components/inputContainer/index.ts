import Block from "../../utils/Block";
import styles from "./input.module.css";
import template from "./input.hbs";
import {HTMLInputTypeAttribute} from '../../typings/types'
import {Input} from "../input";
import validInput from "../../utils/validateInput";

interface InputContainerProps {
    type: HTMLInputTypeAttribute,
    placeholder: string,
    name: string,
    id: string,
    error: string,
    value: string,
    isValid: boolean,
}


export class InputContainer extends Block<InputContainerProps> {
    constructor(props: InputContainerProps) {
        super('div', props);
        this.element?.classList.add(styles.input)
    }

    init() {
        this.children.input = new Input({
            placeholder: this.props.placeholder,
            type: this.props.type,
            name: this.props.name,
            id: this.props.id,
            events: {
                blur: (event: Event): void => {
                    this.validateInput(event.target.name, event.target.value)
                },
            }
        })
        this.children.input.element?.classList.add(styles['input-field']);
    }

    validateInput(name: string, value: string) {
        this.setProps({
            ...this.props,
            value
        });
        if (validInput(name, value)) {
            this.setProps({
                ...this.props,
                isValid: true
            });
            this.element?.classList.remove(styles['input-error-display'])
        } else {
            this.setProps({
                ...this.props,
                isValid: false
            });
            this.element?.classList.add(styles['input-error-display'])
        }
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles
        })
    }
}
