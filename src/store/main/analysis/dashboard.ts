import { Module } from "vuex"

import { IDashboardState } from "./type"
import { IRootState } from "@/store/types"

import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from "@/service/main/analysis/dashboard"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changecategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  getters: {},
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCount = (await getCategoryGoodsCount()).data
      commit("changeCategoryGoodsCount", categoryGoodsCount)

      const categoryGoodsSale = (await getCategoryGoodsSale()).data
      commit("changecategoryGoodsSale", categoryGoodsSale)

      const categoryGoodsFavor = (await getCategoryGoodsFavor()).data
      commit("changeCategoryGoodsFavor", categoryGoodsFavor)

      const addressGoodsSale = (await getAddressGoodsSale()).data
      commit("changeAddressGoodsSale", addressGoodsSale)
    }
  }
}

export default dashboardModule
