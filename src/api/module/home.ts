/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-14 08:59:06
 * @LastEditTime: 2022-07-14 09:01:27
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import HttpRequest from "..";

export const testGet = () => {
  return HttpRequest<string>({
    url: '/user/quey',
    method: 'get',
    interceptors: {
      requestInterceptors(config) {
        console.log('接口请求拦截');
        return config;
      },
      responseInterceptors(res) {
        console.log('接口响应拦截');
        return res;
      }
    }
  });
}

export const testPost = () => {
  return HttpRequest<string>({
    url: '/user/upload',
    method: 'post',
    interceptors: {
      requestInterceptors(config) {
        console.log('接口请求拦截');
        return config;
      },
      responseInterceptors(res) {
        console.log('接口响应拦截');
        return res;
      }
    }
  });
}