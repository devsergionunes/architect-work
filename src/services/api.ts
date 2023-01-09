/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import axios from "axios";

import { TOKEN_KEY } from "./auth";

export const apiUrlBase = process.env.REACT_APP_BASE_URL_API;

export const api = axios.create({
  baseURL: apiUrlBase,
});

// Adiciona o token no header de cada requisição quando ouver um token
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(TOKEN_KEY);

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as any;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
