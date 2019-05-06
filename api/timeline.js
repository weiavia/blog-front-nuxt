import request from './request'
import { apiBaseUrl } from '@/config'

export function create(param) {
  let url = apiBaseUrl + '/timeline'

  return request({
    url,
    type: 'post',
    data: param
  })
}
