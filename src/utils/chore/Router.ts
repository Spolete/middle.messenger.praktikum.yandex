import Block from "./Block";
import Route from "./Route";

export class Router {
    private static __instance: Router;
    private routes: Route[] = [];
    private currentRoute: Route | null = null;
    private history: History = window.history;


    constructor(private readonly rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;

        Router.__instance = this;
    }

    public use(pathname: string, block: typeof Block) {
        const route = new Route(pathname, block, this.rootQuery);
        this.routes.push(route);
        return this;
    }

    public start() {
        window.onpopstate = event => {
            const target = event.currentTarget as Window;

            this._onRoute(target.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    private _onRoute(pathname: string) {
        const route = this._getRoute(pathname);

        if (!route) {
            this.go('/404')
            return;
        }

        if (this.currentRoute && this.currentRoute !== route) {
            this.currentRoute.leave();
        }

        this.currentRoute = route;
        route.render();
    }

    public go(pathname: string) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    public back() {
        this.history.back()
    }

    public forward() {
        this.history.forward()
    }

    private _getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}

export default new Router('#app');
