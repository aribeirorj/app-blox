import axios from "axios";

const api = axios.create({
  baseURL: "https://api-dev.plataformablox.com.br/api",
});

export default api;
