import * as echarts from 'echarts'

// 注册中国地图
import ChinaMapData from '@/base-ui/echarts/data/china.json'
echarts.registerMap('china', ChinaMapData)

export function useEcharts(el) {
  const myEcharts = echarts.init(el)

  const setOptions = (option) => {
    myEcharts.setOption(option)
  }

  window.addEventListener('resize', () => {
    myEcharts.resize()
  })

  return {
    myEcharts,
    setOptions
  }
}
