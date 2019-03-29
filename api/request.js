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
      resolve(res.data)
    }).catch((error) => {
      if(error.response) {
        window.vm.$message({
          showClose: true,
          message: `API: error: ${error.response.data.errno}`,
          type: 'warning'
        });
      }
      
    })
  })
}