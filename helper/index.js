export function deleteNullKey(obj) {
  for (const key in obj) { 
    if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
      delete obj[key]
    }
  }
  return obj
}


export function formatTime (date, hasYear) {
  date = new Date(date)
  
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return {
    year,
    month,
    day,
    hour,
    minute: formatNumber(minute),
    second: formatNumber(second)
  }
}

const formatNumber = (n, isMilli) => {
  n = n.toString()
  let v = n
  if (isMilli) {
    if(n.length == 1) {
      v = '00' + n
    } else if(n.length == 2) {
      v = '0' + n
    }
    return v
  } else {
    return n[1] ? n : '0' + n
  } 
}

const formatCountDown = (time) => {
  var date = new Date(time)
  return {
    day: parseInt(time / 1000 / 60 / 60 / 24) ,
    hour: formatNumber(parseInt(time / 1000 / 60 / 60 % 24)),
    minute: formatNumber(date.getMinutes()),
    second: formatNumber(date.getSeconds()),
    milli: formatNumber(date.getMilliseconds(), true)
  }
}

const getQueryString = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
  var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
  var context = "";  
  if (r != null)  
    context = r[2];  
  reg = null;  
  r = null;  
  return context == null || context == "" || context == "undefined" ? null : context;  
}


// 记录id拼接为数组存入locastorage
export function setId(key, value) {
  if(!getId(key, value)) {
    let likes = localStorage.getItem(key) || ''
    likes = likes.split(',')
    likes.push(value)
    localStorage.setItem(key, likes)
  }
}

// 查找id是否存在于数组中 返回布尔值
export function getId(key, value) {
  let likes = localStorage.getItem(key) || ''
  likes = likes.split(',')
  let id = likes.find((n) => n == value)
  if(id) {
    return true
  }
  return false
}