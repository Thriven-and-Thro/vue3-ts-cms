<template>
  <div class="nav-header-info">
    <el-dropdown>
      <span class="header-info-right">
        <div class="info-right-avatar">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <span>{{ userName }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            icon="el-icon-switch-button"
            @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-document">用户信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-more">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"
import { useRouter } from "vue-router"

import localCache from "@/utils/cache"

export default defineComponent({
  name: "NavHeaderInfo",
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.login.userInfo.name)

    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache("token")
      router.push("/main")
    }

    return {
      userName,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header-info {
  &:deep(.el-dropdown) {
    height: 100%;
    .header-info-right {
      display: flex;
      align-items: center;
      height: 100%;
      .info-right-avatar {
        margin: 0 10px;
      }
    }
  }
}
</style>
