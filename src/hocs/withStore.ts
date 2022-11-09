import store, {Store, StoreEvents} from "../utils/chore/Store";
import Block from "../utils/chore/Block";

interface ComponentConstructable<P extends Record<string, any>> {
    new(props: P): Block<P>
}

export function withStore(mapStateToProps: (state: Store) => any) {
    return function wrap(Component: ComponentConstructable<any>) {
        let previousState: any;

        return class WithStore extends Component {
            constructor(props?: any) {
                previousState = mapStateToProps(store.getState());

                super({...props, ...previousState});

                store.on(StoreEvents.Updated, () => {
                    const stateProps = mapStateToProps(store.getState());

                    previousState = stateProps;
                    this.setProps({...stateProps});
                });
            }
        };
    };
}

export const withUser = withStore(state => ({user: state.user}));
export const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));
export const withSelectedChat = withStore(
    (state) => ({
        selectedChat: (state.chats || [])
            .find(({id}) => id === state.selectedChat)
    })
);
export const withSelectedChatMessages = withStore((state) => {
    const selectedChat = state.selectedChat;

    if (!selectedChat) {
        return {
            messages: [],
            selectedChat: undefined
        };
    }

    return {
        messages: (state.messages || {})[selectedChat] || [],
        selectedChat: state.selectedChat
    };
})
export const withUserAndChats = withStore(state => ({
    user: state.user,
    chats: [...(state.chats || [])]
}))

