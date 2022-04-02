<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleQueryClick"
    />
    <page-content
      :contentTableConfig="contentConfig"
      pageName="users"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
      title="新建用户"
    >
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import PageSearch from "@/components/page-search/src/page-search.vue"
import PageContent from "@/components/page-content/src/page-content.vue"
import PageModal from "@/components/page-modal/src/page-modal.vue"

import searchConfig from "./config/search.config"
import contentConfig from "./config/content.config"
import modalConfig from "./config/model.config"
import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick]: any =
      usePageSearch()

    // 根据按钮不同修改弹窗对应输入框是否隐藏
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      )
      // !.断言不为空
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, handleNewData, handleEditData]: any =
      usePageModal(newCallback, editCallback)

    const store = useStore()
    // store中数据直接在setup中使用也不是响应式的
    // 他的响应式只在template模板中成立
    // 需要store中的数据是响应式，可以通过computed进行包裹
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "departmentId"
      )
      departmentItem!.options = store.state.entireDepartment.map(
        (item: any) => {
          return { title: item.name, value: item.id }
        }
      )
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === "roleId"
      )
      roleItem!.options = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    return {
      searchConfig,
      contentConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfigRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
