/* eslint-disable no-param-reassign */
import axios from "axios";

export const apiUrlBase = process.env.REACT_APP_BASE_URL_API;

export const api = axios.create({
  baseURL: apiUrlBase,
});
