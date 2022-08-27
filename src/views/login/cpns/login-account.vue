<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref()

    // 校验登录业务逻辑
    const loginAction = (isKeepCheckbox) => {
      // 0.校验规则是否正确
      formRef.value.validate((valid) => {
        if (valid) {
          // 1.判断是否记住密码
          if (isKeepCheckbox) {
            // 设置本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            // 不记住密码删除本地缓存
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 2.开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style lang="less" scoped>
</style>
