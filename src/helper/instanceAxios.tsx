import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITTE_HEADER_TOKEN_API}`,
    Accept: 'application/json',
  },
});
