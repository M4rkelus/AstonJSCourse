export default class Comments {
  constructor(data, total) {
    this.data = data;
    this.total = total;
  }

  render() {
    return `
      <section id="comments" class="comments-container">
        <ul class="comments-container__comment-list">
          ${this.data
            .map((item) => {
              return `
              <li class="comments-container__comment-item">
                <h2 class="comments-container__comment-title">${item.name
                  .charAt(0)
                  .toUpperCase()}${item.name.slice(1)}</h2>
                <span class="comments-container__comment-author">Пользователь: ${
                  item.email
                }</span>
                <p class="comments-container__comment-text">${item.body
                  .charAt(0)
                  .toUpperCase()}${item.body.slice(1)}.</p>
              </li>
            `;
            })
            .join(' ')}
        </ul>
      </section>
    `;
  }
}
