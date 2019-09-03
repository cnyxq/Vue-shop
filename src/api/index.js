import ajax from './ajax.js'
//const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//获取食品分类列表
export const reqFoodTypes = () => ajax(BASE_URL+`/index_category`)
//根据经纬度获取商铺列表
export const reqShopList = (longitude, latitude) => ajax(`${BASE_URL}/shops/`,{longitude, latitude})
//根据经纬度和关键字搜索商铺列表
//获取一次性验证码
//用户名密码登陆
//发送短信验证码
//手机号验证码登陆
//根据会话获取用户信息
//用户登出
