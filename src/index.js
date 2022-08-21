import signIn from './pages/signIn/signIn.hbs';
import signUp from './pages/signUp/signUp.hbs';
import error from './pages/error/error.hbs';
import menuLinks from './components/menu/menu.hbs';
import profileChangeInfo from './pages/profile/modules/changeInfo/changeInfo.hbs';
import profile from './pages/profile/modules/main/main.hbs';

import './pages/';
import './pages/profile/components'
import './components';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const menu = document.querySelector('#menu');
  menu.innerHTML = menuLinks();

  if (window.location.pathname === '/signIn') {
    app.innerHTML = signIn();
  } else if (window.location.pathname === '/signUp') {
    app.innerHTML = signUp();
  } else if (window.location.pathname === '/404') {
    app.innerHTML = error({errorCode: 404, errorText: 'Не туда попали'});
  } else if (window.location.pathname === '/500') {
    app.innerHTML = error({errorCode: 500, errorText: 'Мы уже чиним'});
  } else if (window.location.pathname === '/profile') {
    app.innerHTML = profile();
  } else if (window.location.pathname === '/profileChangeInfo') {
    app.innerHTML = profileChangeInfo();
  } else {
    app.innerHTML = signIn();
  }
})