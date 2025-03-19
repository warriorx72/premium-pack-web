// axiosInstance.js
import axios from 'axios';

const API_BAAS_BASE_URL =  `${process.env.BACK_END_URL}/api/v1`;
//const API_BAAS_BASE_URL = "http://host.docker.internal:8080/api/v1";

export const axiosBaas = axios.create({
  baseURL: API_BAAS_BASE_URL,
  timeout: 10000,
});

export const axiosBff = axios.create({
  baseURL: '/api',
  timeout: 10000,
});