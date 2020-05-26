import axios from 'axios';

const url = 'http://newsapi.org/v2/top-headlines?sources=google-news-br';

const api = axios.create({
  baseURL: `${url}&apiKey=accdf88fbcb1426cac56ec98d7f0d381`,
});

export default api;
