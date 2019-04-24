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
    <audio src="http://h5.bukeyi.net/h5/via/music.mp3" class="hide" ref="audio"/>
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
    // 加载解析歌词
    let lrc = await axios.get('http://94.191.104.238:3001/static/lrc.lrc')
    this.lrc = parseLrc(lrc.data).ms

    // 播放音乐
    let audio = this.$refs.audio
    // audio.currentTime = 270

    audio.addEventListener('canplay', () => {
      audio.play()
      this.lyric()
    })

    audio.addEventListener('ended', () => {
      clearInterval(this.lrcTime)
    })
  },
  methods: {
    lyric() {
      this.word = this.$refs.word
      this.lrcTime = null
      this.startTime = new Date()
      this.totalTime = 0
      this.currentLine = 1
      this.nextTime = this.lrc[this.currentLine].t
      this.word.innerHTML = this.lrc[this.currentLine - 1].c
      
      this.lrcRun()
    },
    lrcRun() {
      let progress = 0
      let progressStartTime = 0

      this.lrcTime = setInterval(() => {
        // 歌曲播放
        this.totalTime = new Date() - this.startTime
        // 歌曲播放累积时间大于歌词出现时间
        if(this.totalTime > this.nextTime) {
          this.currentLine ++
          // 最后一句歌词
          if(this.currentLine > this.lrc.length - 1) {
            clearInterval(this.lrcTime)
          } else {
            this.word.innerHTML = this.lrc[this.currentLine -1].c
            this.nextTime = this.lrc[this.currentLine].t
            progressStartTime = this.totalTime
          }
        }
        // 更新TEXT
        progress = (this.totalTime - progressStartTime) / (this.nextTime - this.totalTime) * 100
        this.word.style.backgroundImage = `linear-gradient(to right, #058 ${progress}%, #666 0%)`
      }, 40)
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