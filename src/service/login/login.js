import ddRequest from '..'

const LoginAPI = {
  AcoountLogin: '/login',
  UserInfoById: '/users/',
  UserMenus: '/role/'
}
// 发送登录请求函数   ---account：接受用户登录信息
export function accountLoginRequest(account) {
  return ddRequest.post({
    url: LoginAPI.AcoountLogin,
    data: account
  })
}

// 获取用户信息
export function getUserInfoById(id) {
  return ddRequest.get({
    url: LoginAPI.UserInfoById + id,
    showloading: false
  })
}

// 获取用户菜单
export function requestUserMenusByRoleId(id) {
  return ddRequest.get({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
