import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS,
  RECEIVE_SHOPGOODS
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
  },
  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_SHOPGOODS] (state,{ shopGoods }) {
    state.shopGoods = shopGoods
  },
  [RECEIVE_SHOPRATINGS] (state,{ shopRatings }) {
    state.shopRatings = shopRatings
  },
  [RECEIVE_SHOPINFO] (state,{ shopInfo }) {
    state.shopInfo = shopInfo
  },
}
