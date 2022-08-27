import axios from 'axios'
import localCache from '@/utils/cache'
// 创建axios实例
const request = axios.create({
  baseURL: '/',
  timeout: 8000
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 设置请求头
    console.log('进入-请求拦截器')
    const token = localCache.getCache('token')
    console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)
// 响应拦截器
request.interceptors.response.use(
  (req) => {
    console.log('离开-响应拦截器')
    return req.data
  },
  (err) => {
    console.log(err)
  }
)

export default request
