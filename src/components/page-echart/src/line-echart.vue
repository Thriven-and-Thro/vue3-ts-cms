<template>
  <div class="line-echart">
    <cf-echart :options="options" title="分类商品的销量"> </cf-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import { CfEchart } from "@/basic-ui/echart"

const props = defineProps<{
  xLabels: string[]
  values: any[]
}>()

const options: any = computed(() => {
  return {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.xLabels
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: props.values,
        type: "line",
        areaStyle: {}
      }
    ],
    // 无障碍
    aria: {
      enabled: true,
      decal: {
        show: true
      }
    }
  }
})
</script>
