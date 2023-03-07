import api from './api.js';

import Posts from './components/Posts.js';
import Comments from './components/Comments.js';
import Albums from './components/Albums.js';
import Photos from './components/Photos.js';
import Todos from './components/Todos.js';
import ErrorComponent from './components/ErrorComponent.js';

// Элементы
const main = document.querySelector('.main');
const nextButton = document.querySelector('.pagination__next');
const navButtons = document.querySelectorAll('.header__nav-link');

const getPosts = (page = 1) => {
  api.getPosts(page).then(({ data, total }) => {
    main.innerHTML = new Posts(data, total).render();
  });
};

const getComments = () => {
  api.getComments().then(({ data, total }) => {
    main.innerHTML = new Comments(data, total).render();
  });
};

const getAlbums = () => {
  api.getAlbums().then(({ data, total }) => {
    main.innerHTML = new Albums(data, total).render();
  });
};

const getPhotos = () => {
  api.getPhotos().then(({ data, total }) => {
    main.innerHTML = new Photos(data, total).render();
  });
};

const getTodos = () => {
  api.getTodos().then(({ data, total }) => {
    main.innerHTML = new Todos(data, total).render();
  });
};

const getError = () => {
  main.innerHTML = new ErrorComponent('404').render();
};

const navBtnClickHandler = (e) => {
  navButtons.forEach((button) => {
    button.closest('.header__nav-item').classList.remove('active');
  });
  e.target.closest('.header__nav-item').classList.add('active');
};

navButtons.forEach((button) => {
  button.addEventListener('click', navBtnClickHandler);
});

// nextButton.addEventListener('click', nextBtnClickHandler);

// const postsPage = document.querySelector('.posts-container');
// const commentsPage = document.querySelector('.comments-container');

// Routes
const routes = [
  { path: '/', component: () => getPosts() },
  { path: '/posts', component: () => getPosts() },
  { path: '/comments', component: () => getComments() },
  { path: '/albums', component: () => getAlbums() },
  { path: '/photos', component: () => getPhotos() },
  { path: '/todos', component: () => getTodos() },
  { path: '*', component: () => getError() },
];

console.log(new ErrorComponent('404').render());

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path, routes) =>
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gmi'))) ||
  undefined;

const router = () => {
  const path = parseLocation();
  const { component = '*' } = findComponentByPath(path, routes) || {};
  component();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
