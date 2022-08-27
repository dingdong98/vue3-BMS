import { createStore } from 'vuex'
import { getPageListData } from '@/service/main/system'

import login from './login/login'
import system from './system/system'
import dashboard from './system/dashboard'

const store = createStore({
  state() {
    return {
      allDepartment: [],
      allRole: [],
      allMenus: []
    }
  },
  getters: {},
  mutations: {
    changeAllDepartment(state, list) {
      state.allDepartment = list
    },
    changeAllRole(state, list) {
      state.allRole = list
    },
    changeAllMenus(state, list) {
      state.allMenus = list
    }
  },
  actions: {
    // 获取初始化数据
    async getInitialAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult
      // 2.获取菜单数据
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult

      // 保存数据
      commit('changeAllDepartment', departmentList)
      commit('changeAllRole', roleList)
      commit('changeAllMenus', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

// 初始化调用函数
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
