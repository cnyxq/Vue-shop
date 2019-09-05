import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST
} from "./mutation-types";
import {
  reqAddress,
  reqFoodTypes,
  reqShopList
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
  }
}
