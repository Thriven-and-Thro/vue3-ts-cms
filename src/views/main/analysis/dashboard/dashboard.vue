<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <pie-echart :pieData="categoryGoodsCount" />
      </el-col>
      <el-col :span="10">
        <map-echart :mapData="addressGoodsSale"></map-echart>
      </el-col>
      <el-col :span="7">
        <rose-echart :roseData="categoryGoodsCount"></rose-echart>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <line-echart v-bind="categoryGoodsSale"></line-echart>
      </el-col>
      <el-col :span="12">
        <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from "@/components/page-echart"

export default defineComponent({
  name: "dashboard",
  components: {
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch("dashboard/getDashboardDataAction")

    const categoryGoodsCount: any = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale: any = computed(() => {
      const xLabels: string[] = []
      const values: number[] = []
      store.state.dashboard.categoryGoodsSale.map((item: any) => {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      })
      return {
        xLabels,
        values
      }
    })

    const categoryGoodsFavor: any = computed(() => {
      const xLabels: string[] = []
      const values: number[] = []
      store.state.dashboard.categoryGoodsFavor.map((item: any) => {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      })
      return {
        xLabels,
        values
      }
    })

    const addressGoodsSale: any = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsFavor,
      categoryGoodsSale,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.content-row {
  padding-top: 10px;
}
</style>
