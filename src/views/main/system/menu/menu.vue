<template>
  <div class="menu">
    <page-search
      :searchFormConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleQueryClick"
    />
    <page-content
      :contentTableConfig="contentConfig"
      pageName="menu"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import PageSearch from "@/components/page-search/src/page-search.vue"
import PageContent from "@/components/page-content/src/page-content.vue"

import searchConfig from "./config/search.config"
import contentConfig from "./config/content.config"
import { usePageSearch } from "@/hooks/use-page-search"

export default defineComponent({
  name: "Menu",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick]: any =
      usePageSearch()
    return {
      searchConfig,
      contentConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
