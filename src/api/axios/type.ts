/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-13 10:26:07
 * @LastEditTime: 2022-07-13 13:53:20
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig,
  requestInterceptorsCatch?: (err: any) => any,

  // 响应拦截
  responseInterceptors?: (config: T) => T,
  responseInterceptorsCatch?: (err: any) => any,
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>,
}

export interface CancelAbout {
  url: string,
  controller: AbortController
}
