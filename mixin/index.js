import { formatTime } from '@/helper'
import { classMenu } from '@/config'
import { SERVER_HOST } from '@/env'

export const articleFilter = {
  filters: {
    time(date) {
      let time = formatTime(date)
      return `${time.year}年${time.month}月${time.day}日 ${time.hour}:${time.minute}:${time.second}`
    },
    className(type) {
      let klass = classMenu.find((klass) => {
        if(klass.type == type) {
          return klass
        }
      })
      return klass ? klass.name : 'null'
    }
  }
}

function js_strto_time(str_time){  
  var new_str = str_time.replace(/:/g,"-");  
  new_str = new_str.replace(/ /g,"-");  
  var arr = new_str.split("-");  
  var datum = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));  
  return  datum.getTime()/1000;  
}  

export const staticSourceFilter = {
  filters: {
    sourcePrefix(src) {
      return `${SERVER_HOST}/static/${src}`
    },
    time(date) {
      let time = formatTime(date)
      return `${time.month}月${time.day}日 ${time.hour}:${time.minute}:${time.second}`
    },
  },
  methods: {
    sourcePrefix(src) {
      return `${SERVER_HOST}/static/${src}`
    }
  }
}