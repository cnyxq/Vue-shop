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
  getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  getFoodTypes({commit}) {
    const result = reqFoodTypes()
    if (result.code === 0) {
      const foodTypes = result.data
      commit(RECEIVE_FOODTYPES, {foodTypes})
    }
  }
}
