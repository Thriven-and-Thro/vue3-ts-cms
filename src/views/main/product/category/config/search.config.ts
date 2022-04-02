import { IForm } from "@/basic-ui/form"

const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemLayout: {
    padding: "10px 40px"
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "类别名称",
      placeholder: "请输入类别名称"
    }
  ]
}

export default searchFormConfig
