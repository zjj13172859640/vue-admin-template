import request from '@/utils/request'
import { resolve } from 'url';
import { rejects } from 'assert';

// 向后台提交登录请求, 返回一个axios请求的promise
export function login(username, password) {
  if(username !== 'admin' && password !== 'admin'){
    return new Promise((resolve, rejects) => {
      rejects();
    })
  }
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
