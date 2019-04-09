import request from './request'
import { apiBaseUrl } from '@/config'
import { BLOCK_TYPE } from '../config/enum'

export function write(param) {
  let url = apiBaseUrl + '/blocks'

  return request({
    url,
    type: 'post',
    data: Object.assign(param)
  })
}

export function findOneById(id) {
  let url = apiBaseUrl + `/blocks/${id}`
  return request({ url })
}

export function homeList({type, skip, take}) {
  let url = apiBaseUrl + `/blocks?type=${type}&skip=${skip}&take=${take}`
  return request({ url })
}

export function updateOne(id, param) {
  let url = apiBaseUrl + `/blocks/${id}`
  return request({
    url,
    type: 'put',
    data: param
  })
}