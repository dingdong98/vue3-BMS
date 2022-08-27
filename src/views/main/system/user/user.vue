<template>
  <div class="user">
    <!-- 搜索框 -->
    <page-search
      v-bind:searchFormConfig="searchFormConfig"
      @getResetClick="handleResetClick"
      @getSearchClick="handleSearchClick"
    />
    <!-- 主体 -->
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></page-content>
    <!-- 对话框 -->
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script >
import { defineComponent, ref, computed } from 'vue'

import pageSearch from '@/components/page-search/src/page-search.vue'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal/src/page-modal.vue'
import PageModal from '@/components/page-modal/src/page-modal.vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content-config'
import { usePageSearch } from '@/hooks/use-page-content'
import { modalConfig } from '@/views/main/system/user/config/modal-config'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    pageSearch,
    pageContent,
    pageModal,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleSearchClick } =
      usePageSearch()

    // pageModel相关的hook逻辑
    // 1.密码框的显示和隐藏
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )

      passwordItem.isHidden = false
      console.log(passwordItem.isHidden)
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )

      passwordItem.isHidden = false
      console.log(passwordItem.isHidden)
    }
    const { pageModalRef, defaultInfo, handleEditData, handleNewData } =
      usePageModal(newCallback, editCallback)

    // 2.动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem.options = store.state.allDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })

      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem.options = store.state.allRole.map((item) => {
        return { title: item.name, value: item.id }
      })

      return modalConfig
    })

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleResetClick,
      handleSearchClick,
      modalConfigRef,
      handleEditData,
      handleNewData
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.createAt {
  color: rgb(0, 47, 167);
}
.updateAt {
  color: rgb(0, 47, 167);
}
</style>
