/*
 * @Author: itangbei@sina.com
 * @Date: 2022-07-13 09:43:56
 * @LastEditTime: 2022-07-14 09:03:27
 * @Description: 
 * Copyright (c) 2022 by itangbei@sina.com, All Rights Reserved. 
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CancelAbout, RequestConfig, RequestInterceptors } from './type';

class AxiosHttp {
  // axios实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj: RequestInterceptors<AxiosResponse>;
  /**
   * 存放所有请求url的集合
   * 请求之前需要将url push到该集合中
   * 请求完毕后将url从集合中删除
   * 添加在发送请求之前完成，删除在响应之后删除
   */
  requestUrlList: string[];

  cancelUrlList: Array<CancelAbout>;

  constructor(config: RequestConfig) {
    // 初始化axios
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    this.requestUrlList = [];
    this.cancelUrlList = [];

    this.instance.interceptors.request.use((res: AxiosRequestConfig) => {
      console.log('全局请求拦截');
      return res;
    }, (err: any) => err);

    // 实例请求拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj.requestInterceptors,
      this.interceptorsObj.requestInterceptorsCatch
    );

    // 实例响应拦截器
    this.instance.interceptors.response.use(
      this.interceptorsObj.responseInterceptors,
      this.interceptorsObj.responseInterceptorsCatch
    );

    this.instance.interceptors.response.use((res: AxiosResponse) => {
      console.log('全局响应拦截');
      return res;
    }, (err: any) => err);
  }

  /**
   * 获取指定url在列表中的索引
   * @param url 
   * @returns 
   */
  private getCancelIndex(url: string) {
    return this.cancelUrlList.findIndex((cancel: CancelAbout) => cancel.url === url) as number;
  }

  /**
   * 删除地址操作
   * @param url 请求地址
   */
  private delUrl(url: string) {
    const requestIndex = this.requestUrlList.findIndex((str: string) => str === url);
    const cancelIndex = this.getCancelIndex(url);
    // 删除请求列表中已请求数据
    requestIndex !== -1 && this.requestUrlList?.splice(requestIndex as number, 1);
    // 删除取消列表中
    cancelIndex !== -1 && this.cancelUrlList?.splice(cancelIndex as number, 1);
  }

  /**
   * 请求
   * @param config 
   * @returns 
   */
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果为单个请求设置拦截器，这里使用单个请求的拦截器
      if(config.interceptors?.requestInterceptors){
        config = config.interceptors.requestInterceptors(config);
      }
      const url = config.url;
      if (url) {
        this.requestUrlList.push(url);
        // 为每个请求设置可取消的标识
        const controller = new AbortController();
        config.signal = controller.signal;
        this.cancelUrlList.push({
          url,
          controller
        });
      }
      this.instance.request<any, T>(config).then((res: any) => {
        // 如果为单个响应设置拦截器，这里使用单个响应的拦截器
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors(res);
        }
        resolve(res && res.data);
      }).catch((err: any) => {
        reject(err);
      }).finally(() => {
        // 请求结束，删除已存地址
        url && this.delUrl(url);
      });
    });
  }

  /**
   * 取消请求
   * @param url 
   */
  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      // 取消单个请求
      const cancelIndex = this.getCancelIndex(url);
      cancelIndex >=0 && this.cancelRequest[cancelIndex].controller.abort();
    } else {
      // 取消多个请求
      url.forEach((urlStr: string) => {
        const cancelIndex = this.getCancelIndex(urlStr);
        cancelIndex >=0 && this.cancelRequest[cancelIndex].controller.abort();
      });
    }
  }

  /**
   * 取消全部请求
   */
  cancelAllRequest() {
    this.cancelUrlList?.forEach(({ controller }: CancelAbout) => {
      controller && controller.abort();
    });
  }
}

export default AxiosHttp;