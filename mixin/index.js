import { formatTime } from '@/helper'
import { classMenu } from '@/config'

export let articleFilter = {
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
      return klass.name
    }
  }
}