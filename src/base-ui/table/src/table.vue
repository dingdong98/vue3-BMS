<template>
  <div class="table">
    <!-- 顶部区域header -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <!-- 用户mian区域 -->
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelection"
      v-bind="childrenProps"
    >
      <!-- 选择区域 -->
      <el-table-column v-if="showSelect" type="selection" align="center">
      </el-table-column>

      <!-- 序号区域 -->
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        width="80"
        align="center"
      >
      </el-table-column>

      <!-- 主体table区域 -->
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <!-- 作用域插槽 -->
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 分页footer区域 -->
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          background
          small
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        />
      </slot>
    </div>
  </div>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 1
    },
    propList: {
      type: Array,
      required: true
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showSelect: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['handleSelectionEvent', 'update:page'],
  setup(props, { emit }) {
    // 处理选择框事件
    const handleSelection = (value) => {
      emit('handleSelectionEvent', value)
    }
    const handleCurrentChange = (currentPage) => {
      emit('update:page', { ...props.page, currentPage })
    }
    const handleSizeChange = (pageSize) => {
      emit('update:page', { ...props.page, pageSize })
    }

    return {
      handleSelection,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
