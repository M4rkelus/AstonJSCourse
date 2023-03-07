export default class Posts {
  constructor(data, total) {
    this.data = data;
    this.total = total;
  }

  render() {
    return `
      <section id="posts" class="posts-container">
        <ul class="posts-container__post-list">
          ${this.data
            .map((item) => {
              return `
              <li class="posts-container__post-item">
                <h2 class="posts-container__post-title">${item.title}</h2>
                <span class="posts-container__post-author">Пользователь: ${item.userId}</span>
                <p class="posts-container__post-text">${item.body}</p>
              </li>
            `;
            })
            .join(' ')}
        </ul>
      </section>
    `;
  }
}
