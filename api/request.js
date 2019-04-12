import axios from 'axios'
import { HAS_ERROR } from '@/config/enum'

export default (param) => {
  
  return new Promise((resolve, reject) => {
    axios({
      method: param.type || 'get',
      url: param.url,
      data: Object.assign(param.data || {}, {}),
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