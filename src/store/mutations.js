import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS,
  RECEIVE_SHOPGOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOP
} from './mutation-types.js'
import Vue from 'vue'

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
  [INCREMENT_FOOD_COUNT] (state, { food }) {
    if(!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFood.push(food)
    }else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, { food }) {
    if(food.count) {
      food.count--
      if(food.count === 0) {
        state.cartFood.splice(state.cartFood.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART] (state) {
    state.cartFood.forEach(food => food.count = 0)
    state.cartFood = []
  },
  [RECEIVE_SEARCH_SHOP] (state,{ searchShops }) {
    state.searchShops = searchShops
  }
}
