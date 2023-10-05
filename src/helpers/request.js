import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export const token = user?.token;

export const bookStoreApi = axios.create({
  baseURL: "http://localhost:8888",
  headers: { Authorization: `bearer ${token}` },
});
