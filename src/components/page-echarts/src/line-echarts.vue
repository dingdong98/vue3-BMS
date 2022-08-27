<template>
  <div class="line-echarts">
    <base-echarts :option="option"></base-echarts>
  </div>
</template>

<script >
import { computed, defineComponent } from 'vue'
import BaseEcharts from '@/base-ui/echarts'

export default defineComponent({
  props: {
    title: String,
    xLabels: Array,
    values: Array
  },
  components: {
    BaseEcharts
  },
  setup(props) {
    const option = computed(() => {
      return {
        title: {
          text: props.title
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: props.xLabels
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '分别销量  ',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: props.values
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
