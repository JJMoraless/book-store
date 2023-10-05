import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export const baseApi = "http://192.168.129.72:5040";
console.log("🚀 ~ file: request.js:3 ~ user:", user);
export const token = user?.token;

console.log("🚀 ~ file: request.js:4 ~ token:", token);

export const bookStoreApi = axios.create({
  baseURL: baseApi,
  headers: { Authorization: `Bearer ${token}` },
});
