import {
  getAddressSale,
  getGoodsCount,
  getGoodsFavor,
  getGoodsSale
} from '@/service/main/analysis/index'

const dashboardModule = {
  namespaced: true,
  state() {
    return {
      goodsCount: [],
      goodsSale: [],
      goodsFavor: [],
      goodsAddressSale: []
    }
  },
  mutations: {
    changeGoodsCount(state, list) {
      state.goodsCount = list
    },
    changeGoodsSale(state, list) {
      state.goodsSale = list
    },
    changeGoodsFavor(state, list) {
      state.goodsFavor = list
    },
    changeGoodsAddressSale(state, list) {
      state.goodsAddressSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const goodsCountResult = await getGoodsCount()
      commit('changeGoodsCount', goodsCountResult)

      const goodsSaleResult = await getGoodsSale()
      commit('changeGoodsSale', goodsSaleResult)

      const goodsFavorResult = await getGoodsFavor()
      commit('changeGoodsFavor', goodsFavorResult)

      const goodsAddressSaleResult = await getAddressSale()
      commit('changeGoodsAddressSale', goodsAddressSaleResult)
    }
  }
}

export default dashboardModule
