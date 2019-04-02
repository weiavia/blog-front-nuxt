import request from './request'
import { apiBaseUrl } from '@/config'
import { BLOCK_TYPE } from '../config/enum'


export function write(param) {
  let url = apiBaseUrl + '/blocks'

  return request({
    url,
    type: 'post',
    data: Object.assign(param, {type: BLOCK_TYPE.ARTICLE})
  })
}

export function findOneById(id) {
  let url = apiBaseUrl + `/blocks/${id}`
  return request({ url })
}

export function findAll() {
  let url = apiBaseUrl + `/blocks`
  return request({ url })
}