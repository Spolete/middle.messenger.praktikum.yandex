import template from './chatSidebarHeader.hbs';
import Block from '../../../../utils/Block';
import styles from './chatSidebarHeader.module.css'

interface ChatSidebarHeaderProps {
}


export class ChatSidebarHeader extends Block<ChatSidebarHeaderProps> {
    constructor(props?: ChatSidebarHeaderProps) {
        super('div', props)
        this.element?.classList.add(styles['sidebar-header'])
    }


    render() {
        return this.compile(template, {
            styles
        })
    }
}
