import API, {AuthAPI, SigninData, SignupData} from '../api/AuthAPI';
import store from '../utils/chore/Store';
import router from '../utils/chore/Router';
import MessagesController from "./MessagesController";

class AuthController {
    private readonly api: AuthAPI;

    constructor() {
        this.api = API;
    }

    async signin(data: SigninData) {
        try {
            await this.api.signin(data);
            await this.fetchUser();
            router.go('/chat');
        } catch (e: any) {
            console.error(e);
        }
    }

    async signup(data: SignupData) {
        try {
            await this.api.signup(data);
            await this.fetchUser();
            router.go('/profile');
        } catch (e: any) {
            console.log(e);
        }
    }

    async fetchUser() {
        const user = await this.api.read();
        store.set('user', user);
    }

    async logout() {
        try {
            MessagesController.closeAll();

            await this.api.logout();
            router.go('/');
        } catch (e: any) {
            console.error(e.message);
        }
    }
}

export default new AuthController();
