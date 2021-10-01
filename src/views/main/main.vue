<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '64px' : '250px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="right-container">
        <el-header class="header">
          <nav-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main>
          <div class="main-main-bg">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import { NavMenu } from "@/components/nav-menu"
import { NavHeader } from "@/components/nav-header"

export default defineComponent({
  name: "Main",
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      handleFoldChange,
      isCollapse
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  .main-container {
    height: 100%;
    .el-aside {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .right-container {
      .header {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
}
</style>
