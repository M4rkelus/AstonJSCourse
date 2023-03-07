export default class Albums {
  constructor(data, total) {
    this.data = data;
    this.total = total;
  }

  render() {
    return `
      <section id="albums" class="albums-container">
        <ul class="albums-container__album-list">
          ${this.data
            .map((item) => {
              return `
              <li class="albums-container__album-item">
                <h2 class="albums-container__album-title">${item.title}</h2>
                <span class="albums-container__album-author">Пользователь: ${item.userId}</span>
              </li>
            `;
            })
            .join(' ')}
        </ul>
      </section>
    `;
  }
}
