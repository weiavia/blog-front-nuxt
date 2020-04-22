<style lang='scss' scoped>
  .triangle {
    width: 0;
    height: 0;
    border: 10px solid red;
    border-color: transparent transparent rgba(255,255,255, .2) transparent;
    transform: rotate(-90deg);
    position: absolute;
    left: -20px;
    top: 10px;
  }
  .timeline {
    // .nav {
    //   width: 200px;
      
    // }
    .main {
      width: calc(100% - 10px);
      // width: 100%;
      height: 100%;
      .content {
        padding-left: 40px;
        padding-bottom: 40px;
        box-sizing: border-box;
        border-left: 1px solid rgba(255,255,255, .2);
      }
    }
  }
  .main {
    .circle {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #fff;
      border-radius: 50%;
      border: 5px solid #058;
      left: -50px;
      top: 10px;
    }
    .textarea {
      position: relative;
      z-index: 200;
      width: 100%;
      background: rgba(255,255,255, .2);
      textarea {
        background: none;
        width: 100%;
        min-height: 80px;
        border: none;
        outline: none;
        padding: 10px;
        box-sizing: border-box;
      }
      header {
        line-height: 40px;
        height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #999;
        overflow: hidden;
        position: relative;
        .area_show {
          font-size: 40px;
          vertical-align: middle;
          color: #555;
          transform: rotate(90deg);
        }
        .file_form {
          position: absolute;
          left: -60px;
          top: -60px;
          width: 100px;
          height: 100px;
          opacity: 0;
          cursor: pointer;
          z-index: 2;
        }
        & > .iconfont {
          margin-right: 10px;
          color: #333;
        }
        span {
          font-size: 12px;
          color: #666;
        }
        .writed {
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
    .item {
      position: relative;
      width: 100%;
      background: rgba(255,255,255, .2);
      margin-top: 20px;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      font-size: 14px;
      header {
        display: block;
        padding-bottom: 10px;
        font-size: 12px;
        i {
          font-size: 12px;
        }
      }
      .text {
        color: #444;
        line-height: 1.6;
      }
    }
    .half {
      width: 50%;
    }
    .imgs {
      width: 200px;
      height: 200px;
      border: 1px solid #aaa;
      margin-top: 20px;
      cursor: pointer;
      // background: url('../static/cj.jpg') no-repeat center center;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        opacity: 0;
      }
      .tag {
        position: absolute;
        color: #fff;
        padding: 2px;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, .2);
      }
    }
    .img_tag {
      font-size: 12px;
      padding: 6px;
      background: rgba(255,255,255, .5);
      display: inline-block;
      border-radius: 0 10px 0 0;
      .iconfont {
        font-size: 12px;
      }
    }
  }

  .nav {
    .wapper {
      position: relative;
      display: inline-block;
      padding-right: 40px;
      padding-bottom: 10px;
      .year {
        font-size: 14px;
        margin-bottom: 10px;
        cursor: pointer;
        padding-top: 10px;

        &.active {
          color: #058;
        }
      }
      .month {
        font-size: 12px;
        p {
          margin-bottom: 5px;
          text-decoration: underline;
          cursor: pointer;
          color: #555;
          &.active {
            color: #058;
          }
        }
      }
    }
    .line {
      position: absolute;
      height: 100%;
      width: 2px;
      background: rgba(255,255,255, .2);
      right: 0;
    }
  }
</style>

<template>
  <scroll class="timeline clearfix" @onEnd="more">
    <!-- <div class="nav fl">
      <div class="wapper">
        <div class="line" />
        <div class="nav_item">
          <h3 class="year active">2015年</h3>
          <div class="month">
            <p class="active">1月</p>
            <p>2月</p>
            <p>3月</p>
          </div>
        </div>
        <div class="nav_item">
          <h3 class="year">2014年</h3>
          <div class="month">
            <p>1月</p>
            <p>2月</p>
            <p>3月</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="main fr">
      <div class="content">
        <div class="textarea">
          <i class="circle" />
          <header class="clearfix">
            <div class="fl">
              <input @click="eventPreCheckAuth($event)" type="file" multiple ref="file" accept="image/gif, image/jpeg, image/png" class="file_form" />
              <i class="iconfont icon-tupian pointer" title="插入图片"></i>
              <span class="tianqi">&nbsp;&nbsp;<span v-if="weather"> {{weather.city}} {{weather.wea}} {{weather.tem}}℃</span></span>
              <span>{{new Date() | time}} {{ timeParagraph }} </span>
            </div>
            <div class="fr">
              <span class="writed" v-show="textareaShow" @click="eventPreCheckAuth($event); submit()" v-if="showarea">写好了</span>
              <i class="iconfont pointer area_show active" :class="{'icon-shousuo2': showarea, 'icon-shousuo1': !showarea}" @click="showarea = !showarea"/>
            </div>
          </header>
          <div v-if="showarea">
            <textarea v-show="textareaShow" v-model="content" />
            <footer>
              <p class="img_tag" v-show="this.imgs.length">{{this.imgs.length}}张图片 <i class="iconfont icon-guanbi pointer" @click="clearImg"/></p>
            </footer>
          </div>
        </div>
        <div class="item" v-for="timeline in timelines">
          <div class="triangle" />
          <div class="circle" />
          <header>
            <i class="iconfont icon-tianqi" />
            <span>{{timeline.address}} {{timeline.weather}},</span>
            <span>{{timeline.creteTime | time}} - {{timeline.creteTime | timeParagraphFilter }} </span>
          </header>
          <p class="text">{{timeline.content}}</p>
          <div class="imgs" v-if="timeline.photos[0] && timeline.photos[0].src" :style="{background: 'url('+ sourcePrefix(timeline.photos[0].src) +') no-repeat center center', backgroundSize: 'cover'}" v-viewer>
            <img :src="photo.src | sourcePrefix" v-for="photo in timeline.photos"/>
            <p class="tag">{{timeline.photos.length}}张</p>
          </div>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import { getWeather, uploadFile, checkToken } from '@/api/common'
import { create, getTimeline } from '@/api/timeline'
import { timeParagraph, formatTime } from '@/helper'
import { staticSourceFilter } from '@/mixin'
import commonFilter from '@/mixin'

export default {
  middleware: 'common',
  mixins: [ staticSourceFilter, commonFilter ],
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    let timelines = await getTimeline()
    console.log(timelines)
    return { timelines }
  },
  data () {
    return {
      textareaShow: true,
      weather: null,
      timeParagraph: '',
      content: '',
      timelines: [],
      imgs: [],
      showarea: false,
      page: 0
    };
  },
  created() {
    this.timeParagraph = timeParagraph()
  },
  mounted() {
    console.log(this.timelines)
    this.$refs.file.addEventListener('change', this.uploadImg, false);
    
    // jsonp 获取天气
    let that = this
    document.tianqi = function(res) {
      console.log('天气：')
      console.log(res)
      that.weather = res
    }

    let script = document.createElement('script')
    document.body.appendChild(script)
    script.src = 'https://tianqiapi.com/api?version=v6&appid=42324257&appsecret=CkpQQ6GC&callback=document.tianqi&city=衡阳'

    
  },
  methods: {
    selectFile(event) {
      event.preventDefault()
    },
    clearImg() {
      this.imgs = []
    },
    async more() {
      let timelines = await getTimeline({page: ++ this.page})
      this.timelines = this.timelines.concat(timelines)
    },
    async uploadImg(event) {
      let files = event.target.files
      let res = await uploadFile(files)
      this.imgs = res.data.data
    },
    async submit() {
      let param = {
        content: this.content,
        address: this.weather.city,
        weather: this.weather.wea + this.weather.tem + '℃',
        photos: this.imgs
      }
      let result = await create(param)
      // 提交成功，前端更新列表数据
      this.timelines.unshift({
        content: this.content,
        address: this.weather.city,
        weather: this.weather.wea + this.weather.tem,
        creteTime: new Date().getTime(),
        photos: this.imgs
      })

      this.content = ''
      this.imgs = ''
      this.$notify.success({ title: '提示', message: '发表成功!', position: 'top-right' });
    }
  },
  components: {
    Scroll
  }
}
</script>