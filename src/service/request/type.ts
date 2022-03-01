import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface CFRequestInterceptors<T = AxiosResponse> {
  // 传入拦截器，用于实例请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // 如果接口中的函数需要使用泛型，需要在接口定义泛型，之后在函数中使用
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface CFRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 传入拦截器，用于单一请求拦截
  interceptors?: CFRequestInterceptors<T>
  showLoading?: boolean
}

// 盲点：
// 1.没有设置非必传
// 2.命名不规范
// 3.CFRequestConfig的interceptors没有传入泛型，没有继承AxiosRequestConfig
