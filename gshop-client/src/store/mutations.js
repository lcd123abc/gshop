/**
 * 直接更新state的一系列函数
 */

import {RECIEVE_SHOPS, RECIEVE_CATEGORYS, RECIEVE_ADDRESS, RECIEVE_USERINFO, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_GOODS, INCREAMENT_FOOD_COUNT, DECREAMENT_FOOD_COUNT, CLEAR_CART, RECEIVE_SEARCH_SHOPS} from '@/store/mutations_types.js'
import Vue from 'vue'
export default {
  [RECIEVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECIEVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECIEVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECIEVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  // eslint-disable-next-line no-undef
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [INCREAMENT_FOOD_COUNT] (state, {food}) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREAMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // eslint-disable-next-line no-return-assign
    state.cartFoods.forEach(food => food.count = 0)
    state.cartFoods = []
  },
  [RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
    state.searchShops = searchShops
  }
}
