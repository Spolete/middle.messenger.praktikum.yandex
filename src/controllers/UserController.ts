import API, {UserAPI, User, PasswordData, SearchData, SearchUserData} from '../api/UserAPI';
import store from '../utils/chore/Store';
import router from '../utils/chore/Router';

class UserController {
    private readonly api: UserAPI;

    constructor() {
        this.api = API;
    }

    async profile(data: User) {
        const user = await this.api.profile(data);
        store.set('user', user);
        router.go('/profile');
    }

    async avatar(data: FormData) {
        try {
            const user = await this.api.avatar(data);
            store.set('user', user);
        } catch (e: any) {
            console.error(e);
        }
    }

    async password(data: PasswordData) {
        await this.api.password(data);
        router.go('/profile');
    }

    async search(data: SearchData): Promise<SearchUserData[]> {
        return await this.api.search(data);
    }
}

export default new UserController();
