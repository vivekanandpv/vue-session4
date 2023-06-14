import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'Vue Http App',
  },
});
