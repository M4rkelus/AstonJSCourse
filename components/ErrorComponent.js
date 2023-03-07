export default class ErrorComponent {
  constructor(message) {
    this.message = message;
  }

  render() {
    return `
      <section id="error" class="error">
        <h2 class="error__title">Ошибка</h2>
        <p class="error__message">${this.message}</p>
      </section>
    `;
  }
}
