import template from './index.hbs'
import './components';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  app.innerHTML = template({variable: 'Hello World!'})
})