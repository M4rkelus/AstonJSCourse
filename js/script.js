import api from './api.js';
import View from './view.js';

const render = async () => {
  const posts = await api.getResource('posts');
  const view = new View();

  view.renderPosts(posts.data, 10);
  view.renderPaginator(posts.data, 10);
};
render();

document.querySelector('.button-up').addEventListener('click', () => {
  const main = document.querySelector('.main').getBoundingClientRect().top;
  window.scrollTo({ top: main, behavior: 'smooth' });
});
