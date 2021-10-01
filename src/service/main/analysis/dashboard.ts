import cfRequest from "@/service"
import { IDataType } from "@/service/types"

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

export function getCategoryGoodsCount() {
  return cfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsFavor() {
  return cfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getCategoryGoodsSale() {
  return cfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getAddressGoodsSale() {
  return cfRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}
