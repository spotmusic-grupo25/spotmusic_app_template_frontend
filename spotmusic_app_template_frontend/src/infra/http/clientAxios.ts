import axios from "axios";
import { URL_API } from "../../main/router/Path/url";

const token =
  localStorage.getItem("token") !== null
    ? localStorage.getItem("token")
    : null;

export const clientAxios = axios.create({
  baseURL: URL_API,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  timeout: 30000,
});
