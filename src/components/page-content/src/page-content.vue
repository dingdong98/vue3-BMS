<template>
  <div class="page-content">
    <!-- 用户信息区域  -->
    <div class="content">
      <hy-table
        :listData="dataList"
        :listCount="dataCount"
        v-bind="contentTableConfig"
        v-model:page="pageInfo"
      >
        <!-- header中的插槽 -->
        <template #headerHandler>
          <el-button
            type="primary"
            size="default"
            v-if="isCreate"
            @click="handleNewClcik"
            ><el-icon class="icon"><User /></el-icon>新建</el-button
          >
          <el-button type="success" style="width: 80px"
            ><el-icon class="icon"><Refresh /></el-icon>刷新</el-button
          >
        </template>

        <!-- 公共插槽 -->
        <!-- 插槽一：状态列 -->
        <template #status="scope">
          <el-button
            size="small"
            plain
            :type="scope.row.enable ? 'primary' : 'danger'"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <!-- 插槽二：创建时间列 -->
        <template #createAt="scope">
          <span class="createAt">{{
            $filters.formatTime(scope.row.createAt)
          }}</span>
        </template>
        <!-- 插槽三：更新时间列 -->
        <template #updateAt="scope">
          <span class="updateAt">{{
            $filters.formatTime(scope.row.updateAt)
          }}</span>
        </template>
        <!-- 插槽四：操作列 -->
        <template #handler="scope">
          <div class="handler">
            <el-button
              size="small"
              type="primary"
              v-if="isUpdate"
              @click="handleEditClick(scope.row)"
            >
              编辑</el-button
            >
            <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              icon-color="#626AEF"
              title="请确认是否删除?"
              @confirm="handleDeleteClick(scope.row)"
              @cancel="cancelEvent"
            >
              <template #reference>
                <el-button type="danger" size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </div>
        </template>

        <!-- 动态插槽 -->
        <template
          v-for="item in otherPropSlots"
          :key="item.prop"
          #[item.slotName]="scope"
        >
          <template v-if="item.slotName">
            <slot :name="item.slotName" :row="scope.row"></slot>
          </template>
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script >
import { defineComponent, computed, ref, watch } from 'vue'
import HyTable from '@/base-ui/table'
import { useStore } from 'vuex'
import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  components: { HyTable },
  setup(props, { emit }) {
    const store = useStore()

    // 0.获取操作的权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    //1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    //2. 发送网络请求
    const getPageData = (queryInfo) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    //3. 获取到页面后先发送一次网络请求，获取完整的页面数据
    getPageData()

    //4. 从vuex中获取数据
    const dataList = computed(() => {
      return store.getters[`system/pageData`](props.pageName)
    })
    const dataCount = computed(() => {
      return store.getters[`system/pageCount`](props.pageName)
    })

    // 5.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter((item) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    // 6.删除等操作
    const handleDeleteClick = (item) => {
      store.dispatch('system/getPageDeleteAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const cancelEvent = () => {
      console.log('取消删除操作')
    }

    // 7.创建用户/编辑用户 操作
    const handleEditClick = (item) => {
      emit('editBtnClick', item)
    }
    const handleNewClcik = () => {
      emit('newBtnClick')
    }

    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
      isDelete,
      isCreate,
      isUpdate,
      cancelEvent,
      handleDeleteClick,
      getPageData,
      handleNewClcik,
      handleEditClick
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 10px;
  border-top: 10px solid #f5f5f5;
  .icon {
    padding-right: 5px;
  }
}
</style>
