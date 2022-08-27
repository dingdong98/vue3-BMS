<template>
  <div class="rose-echarts">
    <base-echarts :option="option"></base-echarts>
  </div>
</template>

<script >
import { computed, defineComponent } from 'vue'
import BaseEcharts from '@/base-ui/echarts'

export default defineComponent({
  props: {
    roseProps: Array
  },
  components: {
    BaseEcharts
  },
  setup(props) {
    const option = computed(() => {
      return {
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            type: 'pie',
            radius: [20, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.roseProps
          }
        ]
      }
    })

    return { option }
  }
})
</script>

<style scoped>
</style>
