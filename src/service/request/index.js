import axios from 'axios'
import localCache from '@/utils/cache'

class HYRequest {
  // 属性
  instance
  options
  // 构造器
  constructor(options) {
    // console.log('进入构造器')
    // constructor 方法是类的构造函数，是一个默认方法，通过 new 命令创建对象实例时，自动调用该方法
    this.options = options
    this.instance = axios.create(options)

    // 所有实例的请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('请求拦截')
        // 校验token
        const token = localCache.getCache('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (err) => {
        return err
      }
    )

    // 所有实例的响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('响应拦截')
        // 拦截响应的数据
        if (res.data.code === 0) {
          return res.data.data
        }
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  // 核心处理函数
  request(config) {
    // console.log('调用request处理函数')
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    // console.log(config)
    return this.request({ ...config, method: 'POST' })
  }

  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default HYRequest
