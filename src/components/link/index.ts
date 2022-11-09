import Block from '../../utils/chore/Block';
import {PropsWithRouter, withRouter} from '../../hocs/withRouter';
import template from './link.hbs';
import styles from './link.module.css';

interface LinkProps extends PropsWithRouter {
    to: string;
    label: string;
    events?: {
        click: () => void;
    };
}

class BaseLink extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super('span', {
            ...props,
            events: {
                click: () => this.navigate()
            },
        });

        this.element?.classList.add(styles.link)
    }

    navigate() {
        this.props.router.go(this.props.to);
    }

    render() {
        return this.compile(template, {...this.props, styles});
    }
}

export const Link = withRouter(BaseLink);
