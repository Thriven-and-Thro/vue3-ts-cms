<template>
  <div class="category">
    <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      page-name="category"
      :content-table-config="contentTableConfig"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      ><template v-slot:name>新建类别</template></page-content
    >
    <page-modal
      title="新建类别"
      page-name="category"
      :modal-config="modalConfig"
      ref="pageModalRef"
      :default-info="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import { PageContent } from "@/components/page-content"
import { PageSearch } from "@/components/page-search"
import { PageModal } from "@/components/page-modal"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"

import contentTableConfig from "./config/content.config"
import searchFormConfig from "./config/search.config"
import modalConfig from "./config/modal.config"

const [pageContentRef, handleResetClick, handleQueryClick]: any =
  usePageSearch()

const [pageModalRef, defaultInfo, handleNewData, handleEditData]: any =
  usePageModal()
</script>

<style scoped></style>
