import template from './chatSidebar.hbs';
import Block from '../../../../utils/Block';
import styles from './chatSidebar.module.css'
import {ChatCard} from "../../components/chatCard";
import {ChatSidebarHeader} from "../../components/chatSidebarHeader";
import {ChatSidebarCards} from "../chatSidebarCards";

interface ChatSidebarProps {
}

const chatCards = [
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Яндекс — поисковая система и интернет-портал. Поиск по интернет',
        name: 'Павел Дуров',
        date: '21:06',
        unreadCount: 2,
    }),
    new ChatCard({
        online: true,
        avatar: "https://sun9-41.userapi.com/impg/gymcqbvAsaIGiH-gtHpgr_T7-0HyB4PCUkQ0IA/9-2i92Q6mdw.jpg?size=1245x830&quality=95&sign=07eb7a98bdb93e86ccca447b48deea36&type=album",
        text: 'Займы для бизнеса онлайн, без визитов в офис и залога. Простое и быстрое оформление кредита по банковской выписке и паспорт',
        name: 'Антон Долин',
        date: '21:06',
        unreadCount: 5,
    }),
    new ChatCard({
        online: true,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'это система, которая упростит работу с кандидатами и поможет выстроить единый удобный процесс подбора персона',
        name: 'Максим Заречный',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: true,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Теперь инвестором может стать клиент любого банка',
        name: 'Дмитрий Афанасьев',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
    new ChatCard({
        online: false,
        avatar: "https://pp.userapi.com/c629231/v629231001/c52e/nVDlCUcvPto.jpg",
        text: 'Психология оптимального переживания - купить в интернет-магазине',
        name: 'Арнольд Бах',
        date: '21:06'
    }),
]

export class ChatSidebar extends Block<ChatSidebarProps> {
    constructor(props?: ChatSidebarProps) {
        super('div', props)
        this.element?.classList.add(styles['chat-sidebar'])
    }

    init() {
        this.children.chatSidebarHeader = new ChatSidebarHeader({})
        this.children.chatSidebarCards = new ChatSidebarCards({chatCards})
    }


    render() {
        return this.compile(template, {
            styles
        })
    }
}
