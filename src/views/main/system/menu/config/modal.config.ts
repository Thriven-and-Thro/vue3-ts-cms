import { IForm } from "@/basic-ui/form"

const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "菜单名称",
      placeholder: "请输入菜单名称"
    },
    {
      field: "type",
      type: "input",
      label: "类型",
      placeholder: "请输入类型"
    },
    {
      field: "url",
      type: "input",
      label: "菜单url",
      placeholder: "请输入菜单url"
    },
    {
      field: "icon",
      type: "input",
      label: "菜单icon",
      placeholder: "请输入菜单icon"
    },
    {
      field: "parentId",
      type: "select",
      label: "父菜单",
      placeholder: "请选择父菜单"
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {}
}

export default modalConfig
