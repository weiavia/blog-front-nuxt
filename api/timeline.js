import request from './request'
import { apiBaseUrl } from '@/config'
import { queryParamJoin } from '@/helper'

export function create(param) {
  let url = apiBaseUrl + '/timeline'

  return request({
    url,
    type: 'post',
    data: param
  })
}

export function getTimeline(param) {
  let url = apiBaseUrl + '/timeline' + queryParamJoin(param) 
  return request({
    url,
    data: param
  })
}