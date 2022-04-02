<template>
  <div class="goods">
    <page-content
      :contentTableConfig="contentConfig"
      pageName="goods"
      ref="pageContentRef"
    >
      <template #oldPrice="scope">
        {{ "￥" + scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        <del>{{ "￥" + scope.row.newPrice }}</del>
      </template>
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import PageContent from "@/components/page-content/src/page-content.vue"

import contentConfig from "./config/content.config"

export default defineComponent({
  name: "goods",
  components: {
    PageContent
  },
  setup() {
    return {
      contentConfig
    }
  }
})
</script>

<style scoped></style>
