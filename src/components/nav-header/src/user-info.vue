<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        叮咚
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExit">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item divided>系统管理</el-dropdown-item>
          <el-dropdown-item divided>个人中心</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script >
import { defineComponent } from 'vue'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleExit = () => {
      LocalCache.deleteCache('token')
      router.push('/main')
    }

    return { handleExit }
  }
})
</script>

<style scoped>
</style>
