import signUp from './pages/signUp/signUp.hbs'
import './components';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  app.innerHTML = signUp()
})