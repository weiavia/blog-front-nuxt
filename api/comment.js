import request from './request'
import { apiBaseUrl } from '@/config'
import { COMMENT_PAGE_TAKE } from '@/config/enum'

export function createComment(param) {
  let url = apiBaseUrl + '/comments'

  return request({
    url,
    type: 'post',
    data: param
  })
}

export function getCommentsByThemeId(block_id, page_skip = 0, page_take = COMMENT_PAGE_TAKE) {
  let url = apiBaseUrl + `/comments?block_id=${block_id}&page_skip=${page_skip}&page_take=${page_take}`
  return request({ url })
}