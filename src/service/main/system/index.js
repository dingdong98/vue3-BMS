import ddRequest from '../../index'

export function getPageListData(url, queryInfo) {
  return ddRequest.post({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url) {
  return ddRequest.delete({
    url: url
  })
}

export function createPageData(url, newData) {
  return ddRequest.post({
    url: url,
    data: newData
  })
}

export function editPageData(url, editData) {
  return ddRequest.patch({
    url: url,
    data: editData
  })
}
