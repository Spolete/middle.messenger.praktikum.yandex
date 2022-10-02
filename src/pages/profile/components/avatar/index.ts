import template from './avatar.hbs';
import Block from '../../../../utils/chore/Block';
import styles from './avatar.module.css'
import {Button} from "../../../../components/button";
import {Input} from "../../../../components/input";

interface AvatarProps {
    name?: string,
    change: boolean,
}

export class Avatar extends Block<AvatarProps> {
    constructor(props: AvatarProps) {
        super('form', props)
        this.element?.classList.add(styles.avatar)
    }

    init() {
        if (this.props.change) {
            this.children.button = new Button({
                text: 'Изменить аватар',
                events: {
                    click: (e) => {
                        e.preventDefault();
                    }
                }
            })

            this.children.input = new Input({
                type: 'file',
                name: 'file-input',
                id: 'file-input',
                events: {
                    change: (event: Event): void => {
                        // const formData = new FormData(this.getContent())
                        // UserController.avatar(event.target.files[0])
                        // formData.append('data', event.target.files[0])
                        console.log(event.target.files[0])
                    },
                }
            })
            this.children.input.getContent().classList.add(styles['input-attach'])
        }
    }


    render() {
        let changeClass;
        if (this.props.change) {
            changeClass = styles['avatar-logo-change']
        }

        return this.compile(template, {
            name: this.props.name,
            change: this.props.change,
            changeClass,
            styles
        })
    }
}
