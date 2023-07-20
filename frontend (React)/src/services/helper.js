import axios from "axios";

export const BASE_URL = "http://localhost:8080"; // Path: src\services\helper.js

export let mat = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const myAxios = axios.create({
  // used for server calling (get,post,put,delete)
  baseURL: BASE_URL,
});