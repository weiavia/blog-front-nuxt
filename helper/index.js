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

// 解析lrc文件
export function parseLrc(lrc) {
  var oLRC = {
    ti: "", //歌曲名
    ar: "", //演唱者
    al: "", //专辑名
    by: "", //歌词制作人
    offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
    ms: [] //歌词数组{t:时间,c:歌词}
  };


  if(lrc.length==0) return;
  var lrcs = lrc.split('\n');//用回车拆分成数组
  for(var i in lrcs) {//遍历歌词数组
    lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
      var t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//取[]间的内容
      var s = t.split(":");//分离:前后文字



      if(isNaN(parseInt(s[0]))) { //不是数值
          for (var i in oLRC) {
              if (i != "ms" && i == s[0].toLowerCase()) {
                  oLRC[i] = s[1];
              }
          }
      }else { //是数值
          var arr = lrcs[i].match(/\[(\d+:.+?)\]/g);//提取时间字段，可能有多个
          var start = 0;
          for(var k in arr){
              start += arr[k].length; //计算歌词位置
          }
          var content = lrcs[i].substring(start);//获取歌词内容

          if(content === '') {
            continue;
          }

          for (var k in arr){

              var t = arr[k].substring(1, arr[k].length-1);//取[]间的内容
              var s = t.split(":");//分离:前后文字


              let time = (parseFloat(s[0])*60+parseFloat(s[1])).toFixed(3)
              let timeArr = time.split('.')
              let miao = parseInt(timeArr[0]) * 1000
              let resultTime = miao + parseInt(timeArr[1])
            

              oLRC.ms.push({//对象{t:时间,c:歌词}加入ms数组
                  time: resultTime,
                  text: content
              });
          }
      }
  }
  oLRC.ms.sort(function (a, b) {//按时间顺序排序
      return a.t-b.t;
  });

  return oLRC
}

// 时间段
export function timeParagraph() {
  let date = new Date()
  let hour = date.getHours()
  let str = ''

  if(hour >= 5 && hour <= 9) {
    str = '清晨'
  } 
  else if (hour > 9 && hour <= 12) {
    str = '上午'
  }
  else if (hour > 12 && hour <= 4) {
    str = '中午'
  }
  else if (hour > 4 && hour < 6) {
    str = '下午'
  }
  else if (hour >= 6 && hour <= 11) {
    str = '晚上'
  } else {
    str = '傍晚'
  }

  return str
}