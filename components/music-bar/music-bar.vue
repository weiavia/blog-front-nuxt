<style lang='scss' scoped>
  .music {
    .iconfont {
      cursor: pointer;
    }
    .word {
      margin-left: 20px;
      background-image: linear-gradient(to right, #058 30%, #666 0%);
      -webkit-background-clip: text;
      background-clip: text;
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

    <span class="word">并赋上要显示的内容,也就是添加title属性即可。 </span>
    <audio src="http://h5.bukeyi.net/h5/via/music.mp3" autoplay class="hide"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      playState: true
    };
  },
  mounted() {
    axios.get('http://94.191.104.238:3001/static/lrc.lrc', {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then((lrc) => {
      console.log(lrc)
    })
  },
  methods: {
    changePlayState(boolean) {
      this.playState = boolean
    }
  }
}
</script>