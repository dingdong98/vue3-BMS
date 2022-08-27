import { ref } from 'vue'

// 校验页面数据
export function usePageSearch() {
  const pageContentRef = ref()
  // 重置按钮
  const handleResetClick = () => {
    pageContentRef.value.getPageData()
  }
  // 搜索按钮
  const handleSearchClick = (queryInfo) => {
    pageContentRef.value.getPageData(queryInfo)
  }
  return {
    pageContentRef,
    handleResetClick,
    handleSearchClick
  }
}
