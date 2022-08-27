import {
  getPageListData,
  deletePageData,
  editPageData,
  createPageData
} from '@/service/main/system'

const systemModule = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      departementList: [],
      departementCount: 0,
      menuList: [],
      menuCount: 0,
      goodsList: [],
      goodsCount: 0
    }
  },
  getters: {
    pageData(state) {
      return (pageName) => {
        return state[`${pageName}List`]
      }
    },
    pageCount(state) {
      return (pageName) => {
        return state[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUserlist(state, list) {
      state.usersList = list
    },
    changeUserCount(state, Count) {
      state.usersCount = Count
    },
    changeRolelist(state, list) {
      state.roleList = list
    },
    changeRoleCount(state, Count) {
      state.roleCount = Count
    },
    changedepartementlist(state, list) {
      state.departementList = list
    },
    changedepartementCount(state, Count) {
      state.departementCount = Count
    },
    changemenulist(state, list) {
      state.menuList = list
    },
    changemenuCount(state, Count) {
      state.menuCount = Count
    },
    changegoodslist(state, list) {
      state.goodsList = list
    },
    changegoodsCount(state, Count) {
      state.goodsCount = Count
    }
  },
  actions: {
    // 1.获取页面最新数据
    async getPageListAction({ commit }, payload) {
      const pageName = payload.pageName
      let pageUrl = `/${pageName}/list`

      // 2.发送网络请求
      const PageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 3.将数据存储在state中
      const { totalCount, list } = PageResult
      switch (pageName) {
        case 'users':
          commit(`changeUserlist`, list)
          commit(`changeUserCount`, totalCount)
          break
        case 'role':
          commit(`changeRolelist`, list)
          commit(`changeRoleCount`, totalCount)
          break
        case 'department':
          commit(`changedepartementlist`, list)
          commit(`changedepartementCount`, totalCount)
        case 'menu':
          commit(`changemenulist`, list)
          commit(`changemenuCount`, totalCount)
        case 'goods':
          commit(`changegoodslist`, list)
          commit(`changegoodsCount`, totalCount)
      }
    },

    // 2.按钮的删除操作
    async getPageDeleteAction({ dispatch }, payload) {
      // 1.获取pageName 和 id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 2.调用删除网络请求
      await deletePageData(pageUrl)

      // 重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 3.编辑用户
    async editPageUserAction({ dispatch }, payload) {
      // 1.请求编辑数据
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 2.请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 4.新建用户
    async createPageUserAction({ dispatch }, payload) {
      // 1.请求新建数据
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      // 2.请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
