import axios, {AxiosInstance} from "axios";
import {getToken} from "./token";
import {Routes} from "../const";
import {Comment} from "../types/Comment";

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

export const fetchComments = async (id: number) => {
  const api = createAPI();

  return await api.get(`${Routes.COMMENTS}/${id}`)
}

export const fetchNearbyPlaces = async (id: number) => {
  const api = createAPI();

  return await api.get(`${Routes.HOTELS}/${id}/nearby`);
}

export const postComment = async (id: number, comment: Comment) => {
  const api = createAPI();

  return await api.post(`${Routes.COMMENTS}/${id}`, comment);
}
