import axios, { AxiosError } from 'axios';

const controller = new AbortController();

export const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_HEADER_TOKEN_API}`,
    Accept: 'application/json',
  },
  signal: controller.signal,
});

instanceAxios.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 500) {
        console.log(error.response.status);
        throw new Error('Server error');
      }

      if (error.response?.status === 404) {
        console.log(error.response.status);
        throw new Error('Client error');
      }

      return Promise.reject(error);
    }
  },
);
