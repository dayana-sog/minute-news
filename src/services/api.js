import axios from 'axios';

const api = axios.create({
  baseURL: 'http://newsapi.org',
});

export default api;
