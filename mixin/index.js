import { formatTime, timeParagraph } from '@/helper'
import { classMenu } from '@/config'
import { SERVER_HOST } from '@/env'
import { authForm } from '@/api/request'

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


export const staticSourceFilter = {
  filters: {
    sourcePrefix(src) {
      return `${SERVER_HOST}/static/${src}`
    },
    time(date) {
      let time = formatTime(date)
      return `${time.month}月${time.day}日 ${time.hour}:${time.minute}:${time.second}`
    },
    timeParagraphFilter(date) {
      let time = formatTime(date)
      return timeParagraph(time.hour)
    }
  },
  methods: {
    sourcePrefix(src) {
      src = encodeURIComponent(src)
      return `${SERVER_HOST}/static/${src}`
    }
  }
}

export default {
  methods: {
    async eventPreCheckAuth(event) {
      // await checkToken()
      // try {
      //   await checkToken()
      // } catch(e) {
      //   console.log('catch')
      //   event.preventDefault()
      // }
      // console.log(event)
      // 事件线程不会等待异步结束 所以这种方法不可行

      // token存在否， token过期否 ？
      const token = localStorage.getItem('token')
      if(!token) {
        event.preventDefault()
        authForm()
      }
    }
  },
}