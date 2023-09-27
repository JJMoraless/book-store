import axios from "axios";
const user = localStorage.getItem("user");
export const bookStoreApi = axios.create({
  baseURL: "http://localhost:8888",
  headers: { Authorization: `bearer ${user?.token}`},
});
