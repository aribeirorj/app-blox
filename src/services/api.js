import axios from "axios";

const api = axios.create({
  baseURL: "https://api.instantwebtools.net/v1/",
});

export default api;
