import BaseAPI from './BaseAPI'

export interface User {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string
}

export interface PasswordData {
    oldPassword: string,
    newPassword: string
}

export interface SearchData {
    login: string
}

export class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    profile(data: User): Promise<User> {
        return this.http.put('/profile', {data});
    }

    avatar(data: FormData) {
        return this.http.put('/profile/avatar', {data});
    }

    password(data: PasswordData) {
        return this.http.put('/password', {data});
    }

    search(data: SearchData) {
        return this.http.post('/search', {data});
    }

    read = undefined;
    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new UserAPI();
