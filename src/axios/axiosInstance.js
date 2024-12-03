// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL, // Set the base URL here
// });

// export default axiosInstance;

import axios from 'axios';
import { toast } from 'react-toastify';
import store from '../app/store';
import { setTokens, logout } from '../features/auth/authSlice';

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const { auth } = store.getState();
    if (auth.accessToken) {
      config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { auth } = store.getState();

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(`${baseURL}/auth/refresh`, {
          refreshToken: auth.refreshToken,
        });

        const { accessToken } = response.data;

        store.dispatch(setTokens({ accessToken, refreshToken: auth.refreshToken }));
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        store.dispatch(logout());
        toast.error('Session expired. Please login again.');
        return Promise.reject(refreshError);
      }
    }

    toast.error(error.response?.data?.message || 'Something went wrong!');
    return Promise.reject(error);
  }
);

export default axiosInstance;
