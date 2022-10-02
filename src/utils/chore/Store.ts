import {set} from '../helpers';
import {EventBus} from './EventBus';
import {ChatInfo} from "../../api/ChatsAPI";
import {User} from "../../api/AuthAPI";
import {Message} from "../../controllers/MessagesController";

export enum StoreEvents {
    Updated = 'updated'
}

export interface Store {
    user: User,
    chats: ChatInfo[],
    selectedChat: number,
    messages: Record<number, Message[]>
}

export class Store extends EventBus {
    private state: any = {};

    public set(keypath: string, data: unknown) {
        set(this.state, keypath, data);

        this.emit(StoreEvents.Updated, this.getState());
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();

export default store;
