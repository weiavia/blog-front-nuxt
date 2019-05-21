import axios from 'axios'
import { HAS_ERROR } from '@/config/enum'
import { getToken } from '@/api/common'

export default (param) => {
  
  let token = ''
  if(!process.server) {
    token = localStorage.getItem('token')
  }

  return new Promise((resolve, reject) => {
    axios({
      method: param.type || 'get',
      url: param.url,
      data: Object.assign(param.data || {}, {}),
      headers: { token }
      // withCredentials: true
    }).then((res) => {
      if(res.data.errno > HAS_ERROR) {
        let error = new Error()
        error.response = res
        throw error
      }
      resolve(res.data.data)
    }).catch((error) => {      
      if(error.response) {

        // 没有授权
        if(error.response.status === 401 && !process.server) {
          authForm()
          return
        }

        let message = error.response.data.message
        if( message instanceof Array ) {
          message = message.split(';')[0]
        }
        if(!process.server) {
          window && window.vm.$message({
            showClose: true,
            message: `API: ${message}, `,
            type: 'warning'
          });
        } else {
          reject(message)
          console.log(message)
        }
      }
    })
  })
}

function authForm() {
  window.vm.$prompt('', 'secret', {
    confirmButtonText: '好了',
    cancelButtonText: '没有',
    inputType: 'password'
  }).then(({ value }) => {
    getToken({ secret: value }).then((token) => {
      localStorage.setItem('token', token)
    })
  }).catch(() => {
    window.location.href = 'http://www.mtjj.xyz'
  });
}