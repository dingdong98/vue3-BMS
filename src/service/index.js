// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const ddRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT

  // 传入单个实例的拦截器
  // interceptors: {
  //   // 请求成功拦截器
  //   requestInterceptor: (config) => {
  //     // 携带token的拦截
  //     const token = localCache.getCache('token')
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`
  //     }
  //     return config
  //   },

  //   // 请求失败拦截器
  //   requestInterceptorCatch: (err) => {
  //     return err
  //   },

  //   // 响应成功拦截器
  //   responseInterceptor: (res) => {
  //     return res
  //   },

  //   // 响应失败拦截器
  //   responseInterceptorCatch: (err) => {
  //     return err
  //   }
  // }
})

export default ddRequest
