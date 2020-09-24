import {request} from "@/utils/request";

/**
 * 用户登陆接口
 * @param email 用户邮箱账号
 * @param password 用户密码
 * @returns {*}
 */
export function login(email, password) {
  return request({
    url: "/user/login",
    method: 'post',
    params: {
      user_account: email,
      user_password: password
    }
  })
}

/**
 * 用户注册接口
 * @param email 用户邮箱账号
 * @param password 用户密码
 * @returns {*}
 */
export function register(email, password) {
  return request({
    url: "/user/register",
    method: 'post',
    params: {
      user_account: email,
      user_password: password
    }
  })
}
