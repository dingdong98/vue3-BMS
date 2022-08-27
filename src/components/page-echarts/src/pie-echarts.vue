<template>
  <div class="pie-echarts">
    <base-echarts :option="option"></base-echarts>
  </div>
</template>

<script >
import { computed, defineComponent } from 'vue'
import BaseEcharts from '@/base-ui/echarts'

export default defineComponent({
  props: {
    pieProps: Array
  },
  components: {
    BaseEcharts
  },
  setup(props) {
    const option = computed(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: props.option,
            type: 'pie',
            radius: '50%',
            data: props.pieProps,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
