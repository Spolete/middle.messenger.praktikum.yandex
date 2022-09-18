import { Menu } from './components/menu';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { ErrorPage } from './pages/error';
import { Profile } from './pages/profile/modules/main';
import { ProfileChangeInfo } from './pages/profile/modules/changeInfo';
import { ProfileChangePassword } from './pages/profile/modules/changePassword';
import { ChatPage } from './pages/chat';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const menu = document.querySelector('#menu');
  const menuLink = new Menu();
        menu!.append(menuLink.getContent());

        if (window.location.pathname === '/signIn') {
          const signIn = new SignIn({});
            app!.append(signIn.getContent());
        } else if (window.location.pathname === '/signUp') {
          const signUp = new SignUp({});
            app!.append(signUp.getContent());
        } else if (window.location.pathname === '/404') {
          const error = new ErrorPage({ errorCode: 404, errorText: 'Не туда попали' });
            app!.append(error.getContent());
        } else if (window.location.pathname === '/500') {
          const error = new ErrorPage({ errorCode: 500, errorText: 'Мы уже чиним' });
            app!.append(error.getContent());
        } else if (window.location.pathname === '/profile') {
          const profile = new Profile({});
            app!.append(profile.getContent());
        } else if (window.location.pathname === '/profileChangeInfo') {
          const profileChangeInfo = new ProfileChangeInfo();
            app!.append(profileChangeInfo.getContent());
        } else if (window.location.pathname === '/profileChangePassword') {
          const profileChangePassword = new ProfileChangePassword();
            app!.append(profileChangePassword.getContent());
        } else {
          const chatPage = new ChatPage();
            app!.append(chatPage.getContent());
        }
});
