<template>
  <div class="page-search">
    <!-- 高阶组件：v-bind用于传递组件的配置配置选项，子组件用props接受数据 -->
    <hy-form v-bind="searchFormConfig" v-model="formDate">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button style="width: 80px" @click="resetClick"
            ><el-icon class="icon"><Filter /></el-icon>重置</el-button
          >
          <el-button type="primary" style="width: 80px" @click="searchClick"
            ><el-icon class="icon"><Search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </hy-form>
    <div class="content"></div>
  </div>
</template>

<script >
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'
export default defineComponent({
  props: {
    // 父组件传递子组件数据
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    HyForm
  },
  emits: ['getSearchClick','getResetClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的filed来决定的
    // 1. 优化一：formData中的数据应该动态决定
    const formItems = props.searchFormConfig.formItems
    const formOriginData = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formDate = ref(formOriginData)

    // 2. 优化二：点击重置恢复原始数值
    const resetClick = () => {
      formDate.value = formOriginData
      emit('getResetClick')
    }

    // 3. 优化三：点击搜索发送网络请求，校验数据
    const searchClick = () => {
      emit('getSearchClick',formDate.value)
    }
    return {
      formDate,
      resetClick,
      searchClick
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: #0a60bd;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
  .icon {
    padding-right: 5px;
  }
}
</style>
