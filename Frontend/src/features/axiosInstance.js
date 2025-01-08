import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://michjef.pythonanywhere.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to include token
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
