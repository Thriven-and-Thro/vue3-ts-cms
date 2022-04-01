<template>
  <div class="menu">
    <page-content :contentTableConfig="contentConfig" pageName="menu">
      <template v-slot:name>新建菜单</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import PageContent from "@/components/page-content/src/page-content.vue"

import contentConfig from "./config/content.config"

export default defineComponent({
  name: "Menu",
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
