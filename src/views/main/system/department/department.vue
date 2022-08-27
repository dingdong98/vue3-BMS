<template>
  <div class="department">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="department"
    ></page-content>
  </div>
</template>

<script >
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/content-config'
import { searchFormConfig } from './config/search.config'
import pageContent from '@/components/page-content'
import PageSearch from '@/components/page-search/'

export default defineComponent({
  components: {
    pageContent,
    PageSearch
  },
  name: 'department',
  setup() {
    return { contentTableConfig, searchFormConfig }
  }
})
</script>

<style scoped></style>
