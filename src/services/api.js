import axios from 'axios';

const api = axios.create({
  // baseURL: `${process.env.REACT_APP_BLOG_BACKEND_DOMAIN}/api`
  baseURL: 'http://localhost:3333/api'
});

export default api;
