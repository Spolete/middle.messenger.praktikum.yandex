import signIn from './pages/signIn/signIn.hbs';
import signUp from './pages/signUp/signUp.hbs';
import menuLinks from './components/menu/menu.hbs';
import './pages/';
import './components';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const menu = document.querySelector('#menu');
  menu.innerHTML = menuLinks();

  if (window.location.pathname === '/signIn') {
    app.innerHTML = signIn();
  } else if (window.location.pathname === '/signUp') {
    app.innerHTML = signUp();
  } else {
    app.innerHTML = signIn();
  }
})