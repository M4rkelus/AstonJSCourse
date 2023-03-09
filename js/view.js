export default class View {
  constructor() {
    this.currentPage = 1;
    this.limit = 10;
    this._root = document.querySelector('.main');
  }

  renderPosts(posts, limit, page = this.currentPage) {
    const postsContainer = document.querySelector('.posts');
    const postsList = document.createElement('ul');
    postsList.classList.add('posts__list');
    postsContainer.innerHTML = '';
    page--;

    const start = limit * page;
    const end = start + limit;
    const postData = posts.slice(start, end);
    this.posts = posts;

    console.log(limit);

    postData.forEach((post) => {
      const postElement = document.createElement('li');
      postElement.classList.add('posts__item');
      postElement.innerHTML = `
          <h2 class="posts__title">${post.title
            .charAt(0)
            .toUpperCase()}${post.title.slice(1)}</h2>
          <span class="posts__author">Пользователь: ${post.userId}</span>
          <p class="posts__text">${post.body
            .charAt(0)
            .toUpperCase()}${post.body.slice(1)}</p>
      `;
      postsList.appendChild(postElement);
    });
    postsContainer.appendChild(postsList);
    this._root.appendChild(postsContainer);
  }

  renderPaginator(posts, limit) {
    const paginatorContainer = document.querySelector('.paginator');
    const paginatorPages = Math.ceil(posts.length / limit);
    const paginatorList = document.createElement('ul');
    paginatorList.classList.add('paginator__list');

    Array.from({ length: paginatorPages }, (_, i) => i + 1).forEach((page) => {
      const paginatorElement = this.renderPaginatorElement(page);
      paginatorList.appendChild(paginatorElement);
    });

    paginatorContainer.appendChild(paginatorList);
  }

  renderPaginatorElement(page) {
    const paginatorElement = document.createElement('li');
    paginatorElement.classList.add('paginator__item');
    paginatorElement.innerText = page;
    if (this.currentPage == page) {
      paginatorElement.classList.add('paginator__item_active');
    }

    paginatorElement.addEventListener('click', () => {
      this.currentPage = page;
      this.renderPosts(this.posts, this.limit, this.currentPage);
      let activePage = document.querySelector('.paginator__item_active');
      activePage.classList.remove('paginator__item_active');
      paginatorElement.classList.add('paginator__item_active');
    });
    return paginatorElement;
  }
}
