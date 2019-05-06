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

export function uploadFile(files) {
  let url = apiBaseUrl + '/file'
  let formdata = new FormData();

  for(let i=0; i<files.length; i++) {
    formdata.append('file[]', files[i]);
  }

  return axios({
    url: url,
    method: 'post',
    data: formdata,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export function getToken(param) {
  let url = apiBaseUrl + '/auth'
  return request({
    url,
    type: 'post',
    data: param
  })
}

export function checkToken() {
  let url = apiBaseUrl + '/auth/check'
  return request({ url })
}

