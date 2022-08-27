<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script >
import { defineComponent, computed, ref, nextTick } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { useStore } from 'vuex'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { getMenuLeafKeys } from '@/utils/map-menus'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const elTreeRef = ref()
    const editCallBack = (item) => {
      const leafKeys = getMenuLeafKeys(item.menuList)
      // 下一帧进行绑定
      nextTick(() => {
        console.log(elTeddRef.value)
        elTreeRef.value.setCheckedKeys(leafKeys, false)
      })
    }
    const { pageModalRef, defaultInfo, handleEditData, handleNewData } =
      usePageModal(undefined, editCallBack)

    const store = useStore()
    const menus = computed(() => store.state.allMenus)

    const otherInfo = ref({})
    const handleCheckChange = (data1, data2) => {
      const checkedKeys = data2.checkedKeys
      const handleCheckChange = data2.handleCheckChange
      const menuList = [...handleCheckChange, ...checkedKeys]
      const otherInfo = { menuList: menuList }
    }

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      otherInfo,
      usePageModal,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      menus,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 30px;
}
</style>
