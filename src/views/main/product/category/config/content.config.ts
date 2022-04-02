const contentTableConfig = {
  title: "商品类别",
  propList: [
    { prop: "name", label: "商品种类", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "160",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "160",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ],
  showIndexColumn: true,
  showSelectColumn: false,
  showFooter: true
}

export default contentTableConfig
