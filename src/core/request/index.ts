import { Axios, AxiosRequestHeaders } from 'axios';

const instance = new Axios({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
});

instance.interceptors.request.use(
  (config) => {
    const d: AxiosRequestHeaders = {
      'accept-language': 'en',
    };
    Object.assign(config.headers, d);
    // eslint-disable-next-line no-param-reassign
    config!.headers!['accept-language'] = 'en';
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (responseConfig) => responseConfig,
  (responseError) => Promise.reject(responseError)
);

export function get() {
  instance.request({
    method: 'get',
    data: {},
  });
}

export default instance;
