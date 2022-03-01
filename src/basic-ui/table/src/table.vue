<template>
  <div class="cf-table">
    <!-- 表格头部 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <!-- 表格主体 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <!-- 是否添加选中框 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>
      <!-- 是否添加序号 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      >
      </el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <!-- 使用el-table-column的作用域插槽，通过scope.row可以获取到本行的数据 -->
          <template #default="scope">
            <!-- 使用作用域插槽，传递数据给父组件 -->
            <!-- 这个组件接受的配置信息通过这里向 PageContent 中插入内容 -->
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 表格尾部 -->
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage"
          :page-sizes="[5, 10, 15]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "@vue/runtime-core"

export default defineComponent({
  name: "CfTable",
  props: {
    title: {
      type: String,
      default: ""
    },
    tableData: {
      type: Array,
      required: true
    },
    tableCount: {
      type: Number,
      required: true
    },
    propList: {
      type: Array as PropType<any[]>
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    // 分页器数据
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    // 菜单是否分层
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["selectionChange", "update:page"],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit("selectionChange", value)
    }

    // 分页器
    const currentPage = ref(1)
    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage })
    }
    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize })
    }

    return {
      handleSelectionChange,
      currentPage,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>

<style scoped lang="less">
.cf-table {
  margin-top: 20px;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    .title {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
    }
  }
  .footer {
    padding: 20px;
    .el-pagination {
      text-align: right;
    }
  }
}
</style>
