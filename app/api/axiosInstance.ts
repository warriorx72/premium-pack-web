// axiosInstance.js
import axios from 'axios';

const API_BAAS_BASE_URL = "http://127.0.0.1:8080/api/v1";

export const axiosBaas = axios.create({
  baseURL: API_BAAS_BASE_URL,
  timeout: 10000,
});

export const axiosBff = axios.create({
  baseURL: '/api',
  timeout: 10000,
});