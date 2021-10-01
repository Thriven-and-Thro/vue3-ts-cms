import { IForm } from "@/basic-ui/form"

const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名"
    },
    {
      field: "intro",
      type: "input",
      label: "角色介绍",
      placeholder: "请输入角色介绍"
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {}
}

export default modalConfig
