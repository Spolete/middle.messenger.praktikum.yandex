import API, {ChatsAPI} from '../api/ChatsAPI';
import store from '../utils/chore/Store';
import MessagesController from "./MessagesController";

class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async create(title: string) {
        await this.api.create(title);

        this.fetchChats();
    }

    async fetchChats() {
        const chats = await this.api.read();

        chats.map(async (chat) => {
            const token = await this.getToken(chat.id);

            await MessagesController.connect(chat.id, token);
        });

        store.set('chats', chats);
    }

    getToken(id: number) {
        return this.api.getToken(id);
    }

    addUserToChat(chatId: number, userId: number) {
        const data = {
            chatId,
            users: [userId]
        }
        this.api.addUsers(data);
    }

    async deleteChat(chatId: number) {
        await this.api.deleteChat({chatId});

        this.fetchChats();
    }

    async deleteUserFromChat(chatId: number, userId: number) {
        const data = {
            chatId,
            users: [userId]
        }
        await this.api.deleteUserFromChat(data);
    }

    selectChat(id: number) {
        store.set('selectedChat', id);
    }
}

export default new ChatsController();
