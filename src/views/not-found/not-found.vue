<template>
  <div class="not-found">
    <h2>您访问的页面不存在</h2>
    <hr />
    <h3>请访问正确的路径</h3>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
html,
body,
table {
  margin: 0;

  height: 100%;
}

table {
  width: 100%;
}

#box {
  width: 300px;

  height: 300px;

  background: teal;

  margin: auto;
}
</style>
