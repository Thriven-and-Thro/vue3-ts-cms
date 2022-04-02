import { IForm } from "@/basic-ui/form"

const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称"
    },
    {
      field: "leader",
      type: "input",
      label: "部门领导",
      placeholder: "请输入部门领导"
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {}
}

export default modalConfig
