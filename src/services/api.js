import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3333/api"
  baseURL: "https://3333-d678e301-6cc0-4b6a-96d1-a80f7c3b7908.ws-us02.gitpod.io/api"
});

export default api;
