import ddRequest from '@/service'

const dashboardAPI = {
  goodsCountApi: '/goods/category/count',
  goodsSaleApi: '/goods/category/sale',
  goodsFavorApi: '/goods/category/favor',
  goodsAddressSaleApi: '/goods/address/sale'
}

export function getGoodsCount() {
  return ddRequest.get({
    url: dashboardAPI.goodsCountApi
  })
}
export function getGoodsSale() {
  return ddRequest.get({
    url: dashboardAPI.goodsSaleApi
  })
}
export function getGoodsFavor() {
  return ddRequest.get({
    url: dashboardAPI.goodsFavorApi
  })
}
export function getAddressSale() {
  return ddRequest.get({
    url: dashboardAPI.goodsAddressSaleApi
  })
}
