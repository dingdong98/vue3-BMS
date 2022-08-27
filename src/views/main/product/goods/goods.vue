<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <!-- 图片插槽 -->
      <template #img="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        >
        </el-image>
      </template>
      <!-- 人民币插槽 -->
      <template #money="scope">
        {{ '￥' + scope.row.newPrice }}
      </template>
    </page-content>
  </div>
</template>

<script >
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/content-config'
import pageContent from '@/components/page-content'
export default defineComponent({
  name: 'goods',
  components: { pageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
