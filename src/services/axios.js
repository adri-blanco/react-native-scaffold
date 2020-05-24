import axios from 'axios';

const baseURL = 'localhost:5000/api';
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (res) => Promise.reject(res.data),
);

export default axiosInstance;
