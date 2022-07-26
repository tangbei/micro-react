import { AxiosRequestConfig, AxiosResponse } from 'axios';
import AxiosHttp from './axios';
import { RequestConfig } from './axios/type';

interface MicroResponse<T> {
  code: string,
  message: string,
  success: boolean,
  result: T
}

interface MicroRequestConfigHead<T, R> extends RequestConfig<MicroResponse<R>> {
  data?: T
}

interface MicroRequestConfig<R> extends RequestConfig<MicroResponse<R>> {
}

const baseURL: string = 'https://mock.mengxuegu.com/mock/62c63411af4e0823bcb7e7c5';

const axiosHttp = new AxiosHttp({
  baseURL,
  timeout: 1000 * 60,
  interceptors: {
    requestInterceptors: (config: AxiosRequestConfig) => {
      console.log('实例请求拦截');
      return config
    },

    responseInterceptors: (res: AxiosResponse) => {
      console.log('实例响应拦截');
      return res;
    },

    responseInterceptorsCatch(err) {
      console.log('实例响应报错',err);
    },
  }
});

/**
 * 实例请求
 * @param D 请求头配置
 * @param T 响应体配置
 * @returns 
 */
const HttpRequestHead = <D = any, T = any>(config: MicroRequestConfigHead<D, T>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return axiosHttp.request<MicroResponse<T>>(config);
}

const HttpRequest = <T = any>(config: MicroRequestConfig<T>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return axiosHttp.request<MicroResponse<T>>(config);
}

export const cancelRequest = (url: string | string[]) => {
  return axiosHttp.cancelRequest(url);
}

export const cancelAllRequest = () => {
  return axiosHttp.cancelAllRequest();
}

export default HttpRequest;
