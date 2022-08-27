import { ref } from 'vue'

export function usePageModal(newCb, editCb) {
  const pageModalRef = ref()
  const defaultInfo = ref({})
  const handleEditData = (item) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }

    editCb && editCb()
  }
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }

    newCb && newCb()
  }

  return {
    pageModalRef,
    defaultInfo,
    handleEditData,
    handleNewData
  }
}
