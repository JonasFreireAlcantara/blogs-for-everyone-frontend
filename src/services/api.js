import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.BLOG_BACKEND_DOMAIN}/api`
});

export default api;
