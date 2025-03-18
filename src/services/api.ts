import axios, {AxiosInstance} from "axios";
import {getToken} from "./token";

const BASE_URL = "https://10.react.htmlacademy.pro/six-cities";
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  })

  api.interceptors.request.use(config => {
    const token = getToken();

    if(token) {
      // @ts-ignore
      config.headers['x-token'] = token;
    }

    return config;
  })

  api.interceptors.response.use(response => {
    return response;
  }, (error) => {
        console.log(error);
        return Promise.reject(error);
      }
  )

  return api;
}
