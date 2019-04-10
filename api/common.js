import request from './request'
import { apiBaseUrl } from '@/config'
import axios from 'axios'

export function praise(param) {
  let url = apiBaseUrl + '/praise'

  return request({
    url,
    type: 'put',
    data: param
  })
}

export function uploadFile(file) {
  let url = apiBaseUrl + '/file'
  let formdata = new FormData();
  formdata.append('file', file);
  return axios({
      url: url,
      method: 'post',
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data' },
  })
}