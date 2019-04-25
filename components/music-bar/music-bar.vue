<style lang='scss' scoped>
  .music {
    .iconfont {
      cursor: pointer;
    }
    .word {
      margin-left: 20px;
      background-image: linear-gradient(to right, #058 0%, #666 0%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
  }
</style>

<template>
  <div class="music">
    <i class="iconfont icon-bofang" v-if="!playState" @click="changePlayState(true)" title="播放"></i>
    <i class="iconfont icon-zanting" v-if="playState" @click="changePlayState(false)" title="暂停"></i>
    <i class="iconfont icon-xiayigexiayishou" title="下一首"></i>

    <span class="word" ref="word">......</span>
    <audio src="http://94.191.104.238:3001/static/mp32.mp3" class="hide" ref="audio"/>
  </div>
</template>

<script>
import axios from 'axios'
import { parseLrc } from '@/helper'
import { setTimeout, setInterval, clearInterval } from 'timers';

export default {
  data () {
    return {
      playState: true,
      lrc: null
    };
  },
  async mounted() {
    this.audio = this.$refs.audio
    this.word = this.$refs.word

    // 加载解析歌词
   axios.get('http://94.191.104.238:3001/static/lrc2.lrc').then((lrc) => {
      this.lrc = parseLrc(lrc.data).ms
      this.initLyric()
      this.audio.play()
    })

    this.audio.addEventListener('ended', this.ended)
    this.audio.addEventListener('timeupdate', this.lrcRun)
  },
  methods: {
    initLyric() {
      this.totalTime = 0
      this.currentLine = 1
      this.nextTime = this.lrc[this.currentLine].time
      this.word.innerHTML = this.lrc[this.currentLine - 1].text
      this.progress = 0
      this.progressStartTime = 0
    },
    lrcRun() {
      // 歌曲播放
      this.totalTime = this.audio.currentTime * 1000
      // 歌曲播放累积时间大于歌词出现时间
      if(this.totalTime >= this.nextTime) {
        this.currentLine ++
        // 最后一句歌词
        if(this.currentLine > this.lrc.length - 1) {
          this.word.innerHTML = this.lrc[this.lrc.length - 1].text
          this.nextTime = this.audio.duration * 1000
        } else {
          this.word.innerHTML = this.lrc[this.currentLine -1].text
          this.nextTime = this.lrc[this.currentLine].time
        }
        this.progressStartTime = this.totalTime
      }
      // 更新TEXT
      this.progress = (this.totalTime - this.progressStartTime) / (this.nextTime - this.totalTime) * 100
      this.word.style.backgroundImage = `linear-gradient(to right, #058 ${this.progress}%, #666 0%)`
    },
    jump(second) {
      this.audio.currentTime = second
      // 计算出歌词所在行
      let currentTime = second * 1000
      this.lrc.forEach((lrc, index) => {
        if(currentTime >= lrc.time && this.lrc[index + 1].time && currentTime < this.lrc[index + 1].time) {
          this.currentLine = index
          return
        }
      });
    },
    next() {
      this.initLyric()

    },
    ended() {
      
    },
    play() {

    },
    changePlayState(boolean) {
      if(!boolean) {
        this.$refs.audio.pause()
        clearInterval(this.lrcTime)
      } else {
        this.$refs.audio.play()
        this.lrcRun()
      }
      this.playState = boolean
    }
  }
}
</script>