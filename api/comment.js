import request from './request'
import { apiBaseUrl } from '@/config'

export function createComment(param) {
  let url = apiBaseUrl + '/comment'

  return request({
    url,
    type: 'post',
    data: param
  })
}

export function getCommentsByThemeId(theme_id) {
  let url = apiBaseUrl + `/comment?theme_id=${theme_id}`
  return request({ url })
}