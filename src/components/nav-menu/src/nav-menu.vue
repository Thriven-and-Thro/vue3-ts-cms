<template>
  <div class="nav-menu">
    <div class="nav-menu-header" v-if="!collapse">
      <div class="nav-menu-header-img">code star</div>
    </div>
    <div class="nav-menu-header-popper" v-if="collapse"></div>
    <!-- 可以插入template -->
    <el-menu
      active-text-color="#ffd04b"
      background-color="rgba(0, 0, 0, 0)"
      :default-active="defaultValue"
      :unique-opened="true"
      text-color="rgba(255, 255,255, 0.7)"
      :collapse="collapse"
      :collapse-transition="false"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import { useStore } from "@/store"
import { useRoute, useRouter } from "vue-router"

import { pathMapToMenu } from "@/utils/map-menus"

export default defineComponent({
  name: "NavMenu",
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // 获取userMenus
    const store = useStore()
    // 除去“随便聊聊”
    const userMenus = computed(() =>
      store.state.login.userMenus.filter((v: { id: number }) => v.id !== 41)
    )

    // 路由跳转
    const router = useRouter()
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? "/not-found"
      })
    }

    // 保存当前路径为nav-menu默认路径
    const route = useRoute()
    const currentPath = route.path
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + "")

    return {
      userMenus,
      handleMenuItemClick,
      defaultValue
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  .nav-menu-header {
    .nav-menu-header-img {
      margin: 0 auto;
      height: 150px;
      width: 150px;
      line-height: 150px;
      text-align: center;
      color: #ff7f00;
      font-style: italic;
      font-weight: 700;
      font-size: 24px;
      text-shadow: 5px 5px 5px #333;
      background-image: url("~@/assets/img/logo.png");
      background-size: cover;
      border-radius: 50%;
    }
  }
  .nav-menu-header-popper {
    height: 50px;
  }
  .el-menu {
    border: 0;
    .el-menu-item,
    // /deep/、::v-deep、>>>已经废弃，如今使用:deep()
    &:deep(.el-sub-menu__title) {
      &:hover {
        background-color: rgba(0, 0, 0, 0.9) !important;
      }
    }
  }
}
</style>
