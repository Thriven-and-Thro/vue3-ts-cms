import { IForm } from "@/basic-ui/form"

const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "类别名称",
      placeholder: "请输入类别名称"
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {}
}

export default modalConfig
