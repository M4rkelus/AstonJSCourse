const BASE_URL = 'https://jsonplaceholder.typicode.com';

class Api {
  constructor(options) {
    this._options = options;
  }

  async _getResponse(res) {
    if (res.ok) {
      const headers = new Map(res.headers);
      const data = await res.json();
      return {
        data,
        total: headers.get('x-total-count') || null,
      };
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  async getResource(category) {
    const res = await fetch(`${this._options.BASE_URL}/${category}`, {
      headers: this._options.headers,
    });
    return this._getResponse(res);
  }
}

const api = new Api({
  BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
