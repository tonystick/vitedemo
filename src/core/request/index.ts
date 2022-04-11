/* eslint-disable @typescript-eslint/no-explicit-any */
import { Axios, AxiosRequestHeaders, AxiosRequestConfig } from 'axios';

const instance = new Axios({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
  withCredentials: true,
  headers: {},
});

instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      const headers: AxiosRequestHeaders = {
        'accept-language': 'en',
      };
      Object.assign(config.headers, headers);
    }
    if (typeof config.data === 'object') {
      // eslint-disable-next-line no-param-reassign
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (responseConfig) => Promise.resolve(responseConfig),
  (responseError) => Promise.reject(responseError)
);

export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return new Promise((resovle, reject) => {
    instance
      .request<T>(config)
      .then((res) => {
        resovle(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' });
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'POST' });
}

export function setDefaultsHeaders(header: AxiosRequestHeaders): void {
  Object.assign(instance.defaults.headers, header);
}

export default instance;
