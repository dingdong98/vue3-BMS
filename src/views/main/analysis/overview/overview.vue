<template>
  <div class="common-layout">
    <div class="middle-box">
      <div class="header">
        <strong>叮咚的后台管理系统</strong>
      </div>
      <div class="contain">
        <p>
          叮咚的后台管理系统 是基于 Vue3、Vuex、VueRouter、Webpack、 ElementPlus
          、JavaScript、Echart5 等后台系统解决方案
        </p>
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'overview',
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.common-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 760px;
  margin: 0px auto;
  border: 3px solid #000;
}
.middle-box {
  height: 200px;

  .header {
    height: 100px;
    font-size: 40px;
    text-align: center;
    line-height: 100px;
    color: #0a60bd;
  }

  .contain {
    font-size: 20px;
    color: blue;
  }
  p {
    padding: 10px;
  }
}
</style>
