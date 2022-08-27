import request from './request'

// 用户登录验证
export function loginUserInfo(data) {
  return request({
    baseURL: '/api/login',
    method: 'POST',
    data: data
  })
}

// 用户用户列表
export function requestUserInfoById(id) {
  return request({
    baseURL: '/api/users/' + id,
    method: 'GET',
  })
}
