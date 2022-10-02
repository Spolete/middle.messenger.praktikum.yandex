import Block from '../utils/chore/Block';
import Router from '../utils/chore/Router';

export interface PropsWithRouter {
    router: typeof Router;
}

interface ComponentConstructable<P extends Record<string, any>> {
    new(props: P): Block<P>
}

export function withRouter(Component: ComponentConstructable<any>) {
    type Props = typeof Component extends ComponentConstructable<infer P> ? P : any;

    return class WithRouter extends Component {
        constructor(props: Props & PropsWithRouter) {
            super({ ...props, router: Router });
        }
    }
}
