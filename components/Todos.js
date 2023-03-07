export default class Todos {
  constructor(data, total) {
    this.data = data;
    this.total = total;
  }

  render() {
    return `
      <section id="todos" class="todos">
        <ul class="todos__list">
          ${this.data
            .map((item) => {
              return `
              ${
                item.completed
                  ? `<li class="todos__item todos__item_done">
                      <h2 class="todos__title">${item.title}</h2>
                      <span class="todos__completed">Completed</span>
                     </li>`
                  : `<li class="todos__item todos__item_not-done">
                      <h2 class="todos__title">${item.title}</h2>
                      <span class="todos__completed">Not completed</span>
                     </li>`
              }            
              `;
            })
            .join(' ')}
        </ul>
      </section>
    `;
  }
}
