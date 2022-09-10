import template from './avatar.hbs';
import Block from '../../../../utils/Block';
import styles from './avatar.module.css'

interface AvatarProps {
    name: string,
    change: boolean,
}

export class Avatar extends Block<AvatarProps> {
    constructor(props: AvatarProps) {
        super('div', props)
        this.element?.classList.add(styles.avatar)
    }


    render() {
        let changeClass;
        if (this.props.change) {
            changeClass = styles['avatar-logo-change']
        }

        return this.compile(template, {
            name: this.props.name,
            changeClass,
            styles
        })
    }
}
