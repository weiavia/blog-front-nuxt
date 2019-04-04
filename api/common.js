import request from './request'
import { apiBaseUrl } from '@/config'
import { COMMENT_PAGE_TAKE } from '@/config/enum'

export function praise(param) {
  let url = apiBaseUrl + '/praise'

  return request({
    url,
    type: 'put',
    data: param
  })
}

