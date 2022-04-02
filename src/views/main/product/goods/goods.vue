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

<script lang="ts" setup>
import { PageContent } from "@/components/page-content"

import contentConfig from "./config/content.config"
</script>

<style scoped></style>
