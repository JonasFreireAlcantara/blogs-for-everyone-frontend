import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BLOG_BACKEND_DOMAIN}/api`
});

export default api;
