<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="header-main">
      <breadcrumbs :pathMenus="currentBreadcrumbs" />
      <nav-header-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "@/store"

import NavHeaderInfo from "./nav-header-info.vue"
import Breadcrumbs from "@/basic-ui/breadcrumbs/src/breadcrumbs.vue"

import { pathMapBreadcrumbs } from "@/utils/map-menus"

export default defineComponent({
  name: "NavHeader",
  components: {
    NavHeaderInfo,
    Breadcrumbs
  },
  // 侧边栏的缩放
  emits: ["foldChange"],
  setup(props, { emit }) {
    // 侧边栏的缩放
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    // 面包屑
    const store = useStore()
    const route = useRoute()
    const currentBreadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      currentBreadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  padding: 0 10px;
  height: 100%;
  line-height: 60px;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    color: #ddd;
    line-height: 60px;
  }
  .header-main {
    display: flex;
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }
}
</style>
