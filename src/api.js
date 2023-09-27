import axios from "axios";
export const bookStoreApi = axios.create({
  baseURL: "http://localhost:8888",
});
