import Block from "../../utils/Block";
import template from "./input.hbs";
import {HTMLInputTypeAttribute} from '../../typings/types'

interface InputProps {
    placeholder: string,
    type: HTMLInputTypeAttribute,
    name: string,
    id: string,
    events: {
        blur: (event: Event) => void,
    }
}


export class Input extends Block<InputProps> {
    constructor(props: InputProps) {
        super('input', props);
        this.element.placeholder = this.props.placeholder;
        this.element.type = this.props.type;
        this.element.name = this.props.name;
        this.element.id = this.props.id;

    }

    render() {
        return this.compile(template, {})
    }
}
