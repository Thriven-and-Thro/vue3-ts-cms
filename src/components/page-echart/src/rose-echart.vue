<template>
  <div class="rose-echart">
    <cf-echart :options="options" title="不同城市商品数量"></cf-echart>
  </div>
</template>

<script lang="ts" setup>
import { CfEchart } from "@/basic-ui/echart"
import { IDataType } from "./type"
import { computed, defineProps } from "vue"

const props = defineProps<{
  roseData: IDataType
}>()

const options: any = computed(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        type: "pie",
        radius: [25, 100],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        label: {
          color: "#ddd"
        }
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
