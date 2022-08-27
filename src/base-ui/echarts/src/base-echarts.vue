<template>
  <div class="base-echarts">
    <div ref="baseEchartsRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script >
import { ref, onMounted, defineComponent, watchEffect, watch } from 'vue'
import { useEcharts } from '@/hooks/use-echarts'

export default defineComponent({
  props: {
    option: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '360px'
    }
  },
  setup(props) {
    const baseEchartsRef = ref()
    onMounted(() => {
      const { setOptions } = useEcharts(baseEchartsRef.value)
      watchEffect(() => {
        setOptions(props.option) 
      })
    })
    return {
      baseEchartsRef
    }
  }
})
</script>

<style lang="lcss" scoped>
</style>
