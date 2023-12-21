import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmQ2Yjk3YzY4ZWQ3YWE4NWU1MGQ0ZWZiMmQwOWE3MiIsInN1YiI6IjY0ZWEzOGY0YzVjMWVmMDBjNjUyMzZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ultr3WhS2-DnhOxYp-NG7nK2t3tmex_I40YCApA3bLU',
    Accept: 'application/json',
  },
});
