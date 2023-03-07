export default class Photos {
  constructor(data, total) {
    this.data = data;
    this.total = total;
  }

  render() {
    return `
      <section id="photos" class="photos">
        <ul class="photos__list">
          ${this.data
            .map((item) => {
              return `
              <li class="photos__list-item">
                <figure class="photos__card">
                  <img class="photos__image" src="${item.thumbnailUrl}" alt="${item.title}">
                  <figurecaption class="photos__title">${item.title}</figurecaption>
                </figure>
              </li>
            `;
            })
            .join(' ')}
        </ul>
      </section>
    `;
  }
}
