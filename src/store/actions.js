import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from "./mutation-types";
import {
  reqAddress,
  reqFoodTypes,
  reqLogout,
  reqShopList,
  reqUserInfo,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from "../api"

export default {
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getFoodTypes({commit}) {
    const result = await reqFoodTypes()
    if (result.code === 0) {
      const foodTypes = result.data
      commit(RECEIVE_FOODTYPES, {foodTypes})
    }
  },
  async getShopList({commit,state}) {
    const { longitude, latitude } = state
    const result = await reqShopList(longitude, latitude)
    if (result.code === 0) {
      const shopList = result.data
      commit(RECEIVE_SHOPLIST, {shopList})
    }
  },
  recordUserInfo({commit},userInfo) {
    commit(RECEIVE_USERINFO,{userInfo})
  },
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USERINFO,{userInfo})
    }
  },
  async logout({commit}) {
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USERINFO)
    }
  },
  async getShopGoods({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0){
      const shopGoods = result.data
      commit(RECEIVE_SHOPGOODS,{shopGoods})
    }
  },
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code === 0){
      const shopRatings = result.data
      commit(RECEIVE_SHOPRATINGS,{shopRatings})
    }
  },
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code === 0){
      const shopInfo =result.data
      commit(RECEIVE_SHOPINFO,{shopInfo})
    }
  },
  updateFoodCount({commit}, {isAdd, food}) {
    if(isAdd) {
      commit(INCREMENT_FOOD_COUNT,{food})
    }else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  }
}
