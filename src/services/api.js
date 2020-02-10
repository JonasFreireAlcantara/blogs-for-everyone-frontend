import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3333/api"
  baseURL:
    "https://3333-f94cfb64-a6f3-4eb7-ba0b-35f93576cb3f.ws-us02.gitpod.io/api"
});

export default api;
