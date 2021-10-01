<template>
  <div class="role">
    <PageSearch
      :searchFormConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      :contentTableConfig="contentConfig"
      pageName="role"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></PageContent>
    <PageModal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          :props="{ children: 'children', label: 'name' }"
          node-key="id"
          :data="menus"
          show-checkbox
          @check="handleCheckChange"
          ref="elTreeRef"
        />
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue"
import { useStore } from "@/store"
import { ElTree } from "element-plus/lib/components"

import PageSearch from "@/components/page-search/src/page-search.vue"
import PageContent from "@/components/page-content/src/page-content.vue"
import PageModal from "@/components/page-modal/src/page-modal.vue"

import searchConfig from "./config/search.config"
import contentConfig from "./config/content.config"
import modalConfig from "./config/modal.config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"
import { getMenuLeafKeys } from "@/utils/map-menus"

export default defineComponent({
  name: "Role",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // 获取菜单信息
    const store = useStore()
    const menus = computed(() => {
      return store.state.entireMenu
    })

    // 船队选择的权限
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    // 获取权限信息
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = getMenuLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const [pageContentRef, handleResetClick, handleQueryClick]: any[] =
      usePageSearch()
    // 传入回调函数获得参数
    const [pageModalRef, defaultInfo, handleNewData, handleEditData]: any[] =
      usePageModal(undefined, editCallback)

    return {
      searchConfig,
      contentConfig,
      modalConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus,
      handleCheckChange,
      otherInfo,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.role {
  .menu-tree {
    margin-left: 15%;
  }
}
</style>
