<template>
  <div class="page-content">
    <!-- 使用自定义组件 CfTable -->
    <cf-table
      :tableData="dataList"
      v-bind="contentTableConfig"
      :tableCount="dataCount"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="medium"
          @click="handleNewClick"
        >
          新建用户
        </el-button>
      </template>

      <!-- 普通作用域插槽 -->
      <!--
        在 CfTable 中插入一些通用的内容（使用 CfTable 提供的作用域插槽），
        使用 v-if 和配置信息控制是否显示。
        配置信息直接传入 CfTable，插入的内容中通过作用域插槽 scope 获得数据
      -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="handleEditClick(scope.row)"
            >编辑
          </el-button>
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDeleteClick(scope.row)"
            >删除
          </el-button>
        </div>
      </template>

      <!-- 再提供一个作用域插槽，使用者可以通过配置信息和作用域插槽插入额外的内容 -->
      <!-- 循环遍历出动态作用域插槽 -->
      <!-- 这里的作用域插槽是插入el-table中的 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <!-- 再添加一个插槽，是给父组件插入内容的 -->
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </cf-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"
import { useStore } from "@/store"

import { CfTable } from "@/basic-ui/table"
import { usePermission } from "@/hooks/use-permission"

export default defineComponent({
  name: "PageContent",
  components: {
    CfTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore()

    // 获取操作的权限
    const isCreate = usePermission(props.pageName, "create")
    const isUpdate = usePermission(props.pageName, "update")
    const isDelete = usePermission(props.pageName, "delete")
    const isQuery = usePermission(props.pageName, "query")

    // 动态请求数据
    const getPageData = (query: any = {}) => {
      if (!isQuery) return
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...query
        }
      })
    }

    // 动态返回数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 双向绑定分页器
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 获取其他的动态插槽名
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === "status") return false
        if (item.slotName === "createAt") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "handler") return false
        return true
      }
    )

    // 按钮
    const handleDeleteClick = (item: any) => {
      store.dispatch("system/deletePageDateAction", {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit("newBtnClick")
    }
    const handleEditClick = (item: any) => {
      emit("editBtnClick", item)
    }

    // 第一次进入调用
    getPageData()

    return {
      isCreate,
      isUpdate,
      isDelete,
      dataList,
      dataCount,
      getPageData,
      pageInfo,
      otherPropSlots,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>
