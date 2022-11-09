import Block from "../../utils/chore/Block";
import template from "./input.hbs";
import {HTMLInputTypeAttribute} from '../../typings/types'

interface InputProps {
    placeholder?: string,
    type: HTMLInputTypeAttribute,
    name: string,
    id: string,
    events?: {
        blur?: (event: Event) => void,
        change?: (event: Event) => void,
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

    public setValue(value: string) {
        return (this.element as HTMLInputElement).value = value;
    }

    public getName() {
        return (this.element as HTMLInputElement).name;
    }

    public getValue() {
        return (this.element as HTMLInputElement).value;
    }

    render() {
        return this.compile(template, {})
    }
}
