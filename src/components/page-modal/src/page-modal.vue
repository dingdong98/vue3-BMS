<template>
  <!-- 对话框 -->
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建" width="30%" center>
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>

      <!-- 预留插槽 -->
      <slot></slot>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script >
import { defineComponent, ref, watch } from 'vue'
import HyForm from '@/base-ui/form'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref({})
    const store = useStore()
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    // 点击确定按钮事件
    const handleConfirmClick = () => {
      // 1.对话框隐藏
      dialogVisible.value = false
      // 2.判断是新建用户/编辑用户
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log('编辑用户')
        store.dispatch('system/editPageUserAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        console.log('新建用户')
        store.dispatch('system/createPageUserAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dialog__footer {
  height: 500px;
}
</style>
