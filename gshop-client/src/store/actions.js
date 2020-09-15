/**
 * 通过mutations间接更新state
 */

import {RECIEVE_SHOPS,
  RECIEVE_CATEGORYS,
  RECIEVE_ADDRESS,
  RECIEVE_USERINFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREAMENT_FOOD_COUNT,
  DECREAMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from '@/store/mutations_types.js'
import {reqAddress, reqFoodCategorys, reqShops, reqUserInfo, reqLogout, reqShopInfo, reqShopRatings, reqShopGoods, reqsearchShops} from '@/api'
export default {
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECIEVE_ADDRESS, {address})
    }
  },
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECIEVE_SHOPS, {shops})
    }
  },
  async getCategorys ({commit}) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECIEVE_CATEGORYS, {categorys})
    }
  },
  setUserInfo ({commit}, userInfo) {
    commit(RECIEVE_USERINFO, {userInfo})
  },
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECIEVE_USERINFO, {userInfo})
    }
  },
  async logoutAction ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      const userInfo = {}
      commit(RECIEVE_USERINFO, {userInfo})
    }
  },
  // 异步获取商家信息
  async getShopInfo ({commit}, cb) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
      cb && cb()
    }
  },
  // 异步获取商家评价列表
  async getShopRatings ({commit}, cb) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      cb && cb()
    }
  },
  // 异步获取商家商品列表
  async getShopGoods ({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      callback && callback()
    }
  },
  updateFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREAMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREAMENT_FOOD_COUNT, {food})
    }
  },
  clearCart ({commit}) {
    commit(CLEAR_CART)
  },
  async searchShops ({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqsearchShops({geohash, keyword})
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  }
}
