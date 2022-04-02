<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentConfig"
      pageName="menu"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template v-slot:name>新建菜单</template>
    </page-content>
    <page-modal
      title="新建菜单"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      pageName="menu"
      ref="pageModalRef"
    >
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { PageContent } from "@/components/page-content"
import { PageModal } from "@/components/page-modal"

import { usePageModal } from "@/hooks/use-page-modal"
import { computed } from "vue"
import { useStore } from "vuex"

import contentConfig from "./config/content.config"
import modalConfig from "./config/modal.config"

const [pageModalRef, defaultInfo, handleNewData, handleEditData]: any =
  usePageModal()

const store = useStore()

// 对下拉框的数据进行获取并处理成element-plus要求的数据形式
const modalConfigRef = computed(() => {
  const parentIdItem = modalConfig.formItems.find(
    (item) => item.field === "parentId"
  )
  parentIdItem!.options = store.state.entireMenu
    .filter((item: { type: number }) => item.type === 1)
    .map((item: { name: string; id: number }) => {
      return { title: item.name, value: item.id }
    })

  return modalConfig
})
</script>

<style scoped></style>
