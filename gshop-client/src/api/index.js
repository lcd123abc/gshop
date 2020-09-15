/**
 * 包含N个接口的函数的模块
 */

import ajax from '@/api/ajax'
const BASE_URL = '/api'

// 根据经纬度获取位置信息
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + `/index_category`)
// 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + `/shops`, {longitude, latitude})
// 根据关键字搜索商家列表
export const reqsearchShops = ({geohash, keyword}) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
// 用户名密码登陆
export const reqPwdLogin = ({name, password, captcha}) => ajax(BASE_URL + '/login_pwd', {name, password, captcha}, 'POST')
// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 手机号验证码登陆
export const reqSmsLogin = ({phone, code}) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// 根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// 用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')
/**
* 获取商家信息
*/
export const reqShopInfo = () => ajax('/info')
/**
* 获取商家评价数组
*/
export const reqShopRatings = () => ajax('/ratings')
/**
* 获取商家商品数组
*/
export const reqShopGoods = () => ajax('/goods')
