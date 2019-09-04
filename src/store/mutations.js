import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST
} from './mutation-types.js'

export default {
  [RECEIVE_ADDRESS] (state,{ address }) {
    state.address = address
  },
  [RECEIVE_FOODTYPES] (state,{ foodTypes }) {
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPLIST] (state,{ shopList }) {
    state.shopList = shopList
  }
}
