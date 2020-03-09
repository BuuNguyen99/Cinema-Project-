import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create({
      baseURL: 'http://localhost:3000/',
    });
    instance.interceptors.response.use(this.handlerSuccess, this.handlerError);
    this.instance = instance;
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, data) {
    return this.instance.post(url, data);
  }

  put(url, data) {
    return this.instance.put(url, data);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();
