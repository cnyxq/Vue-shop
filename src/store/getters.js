export default {
  totalCount(state) {
    return state.cartFood.reduce((total, food) =>  total + food.count, 0)
  },
  totalPrice(state) {
    return state.cartFood.reduce((total, food) => total + food.count * food.price, 0)
  },
  positiveCount(state) {
    return state.shopRatings.reduce((total, rating) => total + (rating.rateType === 0 ? 1 : 0), 0)
  }
}
