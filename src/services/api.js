import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.instantwebtools.net/v1/",
});

export async function getService(param) {
  try {
    return await api.get(param);
  } catch (error) {
    alert("Erro ao carregar os dados");
  }
}
