<template>
  <div class="cf-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <!-- 不同类型输入框使用不同的模板 -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <!-- 因为此处只是绑定，可以使用props里的值 -->
                <!-- 不使用v-model，可以获取props发送新值；使用v-model，就不能使用props -->
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue?.[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue?.[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.title"
                    :label="option.title"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <!-- 因后端接口的原因，暂时不能使用时间选择器 -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue?.[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  value-format="YYYY-MM-DD"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <slot name="footer"></slot>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import { IFormItem } from "../types"

export default defineComponent({
  name: "CfForm",
  props: {
    // v-model绑定的信息
    modelValue: {
      type: Object,
      require: true
    },
    // 配置文件传入的信息
    formItems: {
      // PropType接受一个泛型作为类型注解
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "0 0" })
    },
    isHidden: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // 实现跨组件双向绑定
    // 存放在一个新对象里，因为props不应该被修改
    // const formData = ref({ ...props.modelValue })
    // // 监听数据
    // watch(
    //   formData,
    //   (newValue) => {
    //     // 改变时发射事件
    //     emit("update:modelValue", newValue)
    //   },
    //   { deep: true }
    // )

    const handleValueChange = (value: any, field: string) => {
      // 更新数据并以一个新的对象传递过去
      emit("update:modelValue", { ...props.modelValue, [field]: value })
    }
    return {
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.cf-form {
  padding-top: 20px;
  border-radius: 10px;
}
</style>
