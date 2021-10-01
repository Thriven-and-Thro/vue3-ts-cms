import cfRequest from "@/service"
import { IDataType } from "@/service/types"

export function getPageListData(url: string, queryInfo: any) {
  return cfRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return cfRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return cfRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return cfRequest.patch<IDataType>({
    url,
    data: editData
  })
}
