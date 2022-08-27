<template>
  <el-row :gutter="10">
    <el-col :span="7">
      <hy-card title="分类商品数量【饼图】">
        <pie-echarts :pieProps="goodsCountData"></pie-echarts>
      </hy-card>
    </el-col>
    <el-col :span="10">
      <hy-card title="城市商品数量">
        <map-echarts :mapProps="goodsAddressSale"></map-echarts>
      </hy-card>
    </el-col>
    <el-col :span="7">
      <hy-card title="分类商品数量【玫瑰图】">
        <rose-echarts :roseProps="goodsCountData"></rose-echarts>
      </hy-card>
    </el-col>
  </el-row>

  <el-row :gutter="10" class="content-row">
    <el-col :span="12">
      <hy-card title="分类商品销量">
        <line-echarts v-bind="goodsSaleData"></line-echarts>
      </hy-card>
    </el-col>
    <el-col :span="12">
      <hy-card title="分类商品收藏">
        <bar-echarts v-bind="goodsFavorData"></bar-echarts>
      </hy-card>
    </el-col>
  </el-row>
</template>

<script >
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import HyCard from '@/base-ui/card'
import BaseEcharts from '@/base-ui/echarts'
import {
  pieEcharts,
  roseEcharts,
  lineEcharts,
  barEcharts,
  mapEcharts
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    HyCard,
    BaseEcharts,
    pieEcharts,
    roseEcharts,
    lineEcharts,
    barEcharts,
    mapEcharts
  },
  setup() {
    const store = useStore()
    // 调用vuex中的action发起网络请求获取数据
    store.dispatch('dashboard/getDashboardDataAction')
    // 拿到数据后传递给pieEcharts组件、roseEcharts组件
    const goodsCountData = computed(() => {
      return store.state.dashboard.goodsCount.map((item) => {
        return { value: item.goodsCount, name: item.name }
      })
    })
    // 拿到数据后传递给lineEcharts组件
    const goodsSaleData = computed(() => {
      const xLabels = []
      const values = []
      const title = '商品销量折线图'

      const goodsSaleData = store.state.dashboard.goodsSale
      for (const item of goodsSaleData) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return { xLabels, values, title }
    })

    // 拿到数据后传递给barEcharts组件
    const goodsFavorData = computed(() => {
      const xLabels = []
      const values = []
      const title = '商品喜爱程度渐变图'

      const goodsFavorData = store.state.dashboard.goodsFavor
      for (const item of goodsFavorData) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return { xLabels, values, title }
    })
    // 拿到数据后传递给mapEcharts组件
    const goodsAddressSale = computed(() => {
      return store.state.dashboard.goodsAddressSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    })
    console.log(goodsAddressSale)

    return { goodsCountData, goodsSaleData, goodsFavorData, goodsAddressSale }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 10px;
}
</style>
