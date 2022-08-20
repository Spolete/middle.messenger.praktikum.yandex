import signIn from './pages/signIn/signIn.hbs';
import signUp from './pages/signUp/signUp.hbs';
import './pages/';
import './components';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  if (window.location.pathname === '/signIn') {
    app.innerHTML = signIn();
  } else if (window.location.pathname === '/signUp') {
    app.innerHTML = signUp();
  } else {
    app.innerHTML = signIn();
  }
})