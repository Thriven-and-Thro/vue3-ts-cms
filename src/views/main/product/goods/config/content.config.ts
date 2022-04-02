const contentTableConfig = {
  title: "商品列表",
  propList: [
    { prop: "name", label: "商品名称", minWidth: "250" },
    { prop: "oldPrice", label: "原价格", minWidth: "60", slotName: "oldPrice" },
    { prop: "newPrice", label: "现价格", minWidth: "60", slotName: "newPrice" },
    { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "image" },
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
    }
  ],
  showIndexColumn: true,
  showSelectColumn: false
}

export default contentTableConfig
