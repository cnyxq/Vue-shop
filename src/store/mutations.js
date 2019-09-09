import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST,
  RECEIVE_USERINFO
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
  },
  [RECEIVE_USERINFO] (state,{ userInfo }) {
    state.userInfo = userInfo
  }
}
