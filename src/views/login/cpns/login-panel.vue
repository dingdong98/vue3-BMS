<template>
  <div class="login-panel">
    <h1 class="title">叮咚的收件箱</h1>
    <el-tabs type="border-card" class="demo-tabs" v-model="currentTab" stretch>
      <el-tab-pane name="accountRef">
        <template #label>
          <span
            ><el-icon class="icon-weight" :size="15"><Avatar /></el-icon
            ><span>用户登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phoneRef">
        <template #label>
          <span
            ><el-icon class="icon-weight" :size="15"><Cellphone /></el-icon
            ><span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <!-- 账户密码 -->
    <div class="account-control">
      <el-checkbox v-model="isKeepCheckbox">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <!-- 登录按钮 -->
    <div>
      <el-button type="success" class="login-btn" @click="handleLoginClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script >
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    // 定义属性
    const isKeepCheckbox = ref(true)
    const accountRef = ref()
    const phoneRef = ref()
    const currentTab = ref('accountRef')
    // 定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'accountRef') {
        accountRef.value.loginAction(isKeepCheckbox.value)
      } else {
        console.log('phone')
      }
    }

    return {
      isKeepCheckbox,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
