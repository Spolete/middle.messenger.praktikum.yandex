import BaseAPI from './BaseAPI';
import {User} from './AuthAPI';

export interface ChatInfo {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: User,
        time: string;
        content: string;
    }
}

export interface Chat {
    id: number;
    title: string;
    unread_count: number,
    last_message: { content: string, time: string }
}

export interface ChatToken {
    token: string;
}

export interface ChatsUser {
    users: number[]
    chatId: number
}

interface ChatId {
    chatId: number
}

interface DeletedChatResponse {
    userId: number,
    result: {
        id: number,
        title: string,
        avatar: string
    }
}

export class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    create(title: string): Promise<unknown> {
        return this.http.post('/', {data: {title}});
    }

    read(): Promise<ChatInfo[]> {
        return this.http.get('/');
    }

    deleteChat(data: ChatId): Promise<DeletedChatResponse> {
        return this.http.delete('/', {data});
    }

    async getToken(id: number): Promise<string> {
        const response = await this.http.post<{ token: string }>(`/token/${id}`);

        return response.token;
    }

    addUsers(data: { chatId: number, users: number[] }): Promise<unknown> {
        return this.http.put('/users', {data});
    }

    deleteUserFromChat(data: { chatId: number, users: number[] }): Promise<unknown> {
        return this.http.delete('/users', {data});
    }

    update = undefined;
    delete = undefined;
}

export default new ChatsAPI();
