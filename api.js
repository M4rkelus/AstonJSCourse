const BASE_URL = 'https://jsonplaceholder.typicode.com';

class Api {
  constructor(options) {
    this._options = options;
  }

  async _getResponce(res) {
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

  async getPosts(page = 1) {
    const res = await fetch(
      `${this._options.BASE_URL}/posts?_limit=10&_page=${page}`,
      {
        headers: this._options.headers,
      }
    );
    return this._getResponce(res);
  }

  async getComments() {
    const res = await fetch(`${this._options.BASE_URL}/comments`, {
      headers: this._options.headers,
    });
    return this._getResponce(res);
  }

  async getAlbums() {
    const res = await fetch(`${this._options.BASE_URL}/albums`, {
      headers: this._options.headers,
    });
    return this._getResponce(res);
  }

  async getPhotos(page = 1) {
    const res = await fetch(
      `${this._options.BASE_URL}/photos?_limit=100&_page=${page}`,
      {
        headers: this._options.headers,
      }
    );
    return this._getResponce(res);
  }

  async getTodos() {
    const res = await fetch(`${this._options.BASE_URL}/todos`, {
      headers: this._options.headers,
    });
    return this._getResponce(res);
  }
}

const api = new Api({
  BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
