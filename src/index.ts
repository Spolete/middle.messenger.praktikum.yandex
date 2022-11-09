import {SignIn} from './pages/signIn';
import {SignUp} from './pages/signUp';
import {ErrorPage} from './pages/error';
import {ProfilePage} from './pages/profile/modules/main';
import {ProfileChangeInfo} from './pages/profile/modules/changeInfo';
import {ProfileChangePassword} from './pages/profile/modules/changePassword';
import {ChatPage} from './pages/chat';
import Router from "./utils/chore/Router";
import AuthController from "./controllers/AuthController";

enum Routes {
    Index = '/',
    ClientError = '/404',
    ServerError = '/500',
    Register = '/register',
    Profile = '/profile',
    ProfileChangeInfo = '/profileChangeInfo',
    ProfileChangePassword = '/profileChangePassword',
    Chat = '/chat'
}

window.addEventListener('DOMContentLoaded', async () => {
    Router
        .use(Routes.Index, SignIn)
        .use(Routes.ClientError, ErrorPage)
        .use(Routes.ServerError, ErrorPage)
        .use(Routes.Register, SignUp)
        .use(Routes.Profile, ProfilePage)
        .use(Routes.ProfileChangeInfo, ProfileChangeInfo)
        .use(Routes.ProfileChangePassword, ProfileChangePassword)
        .use(Routes.Chat, ChatPage)

    try {
        await AuthController.fetchUser();
        Router.start();
        if (window.location.pathname === Routes.Index || window.location.pathname === Routes.Register) {
            Router.go(Routes.Profile);
        }
    } catch (e) {
        Router.start();
        if (window.location.pathname !== Routes.Register && window.location.pathname !== Routes.ClientError
            && window.location.pathname !== Routes.ServerError) {
            Router.go(Routes.Index);
        }
    }

});
