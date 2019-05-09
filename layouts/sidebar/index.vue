<style lang='scss' scoped>
.face {
  text-align: center;
  height: 100px;
  background: url('./images/1.jpg');
  background-size: cover;
  margin-bottom: 50px;
  position: relative;
  .face_wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    transform: translateY(50%);
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }

  .face_wrapper:hover img:last-child {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .face_wrapper img:first-child  {
    animation: rotates 5s linear infinite;
  }
  .face_wrapper img:last-child {
    opacity: 0;
    z-index: 2;
    transform: scale(0.1) rotate(360deg);
    border-radius: 50%;
    transition: all .5s;
  }
}
@keyframes rotates {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.title {
  text-align: center;
  padding-top: 20px;
  color: $color_level_1;
  h1 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  h2 {
    font-size: 14px;
    color: $color_level_1;
  }
}
.section_title {
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  color: #555;
  font-weight: bold;
}

.concat {
  padding: 30px 10px 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  img {
    width: 100%;
  }
  .email {
    margin-bottom: 20px;
    font-size: 14px;
    color: #666;
  }
}

.neighbor {
  padding: 30px 10px 0;
  width: 100%;
  box-sizing: border-box;
}

.about {
  margin-top: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  .content {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    border-bottom: 1px dashed #666;
    padding-bottom: 20px;
  }
  .item {
    text-align: center;
    padding: 0 10px;
    .iconfont {
      font-size: 40px;
      color: #555;
      display: block;
      margin-bottom: 6px;
    }
  }
}
</style>

<template>
  <scroll class="sidebar section_background">
    <div class="user">
      <div class="face pointer">
        <div class="face_wrapper">
          <img src="./images/0.jpg">
          <img src="./images/me.jpg" />
        </div>
      </div>
      <hgroup class="title">
        <h1>路过一只大侠</h1>
        <h2>我又从西厢过，十二年前的白日梦</h2>
      </hgroup>
    </div>
    <t-nav />

    <div class="maxShow">
      <section class="about">
        <h3 class="section_title">ABOUT ME</h3>
        <div class="content">
          <div class="item pointer" @click="resume">
            <i class="iconfont icon-guanyuwo"/>
            <p>Resume</p>
          </div>

          <div class="item pointer" @click="timeline">
             <i class="iconfont icon-shijianzhou pointer" title="时间轴" />
            <p>Timeline</p>
          </div>

          <div class="item pointer" @click="github">
            <i class="iconfont icon-github1"/>
            <p>Github</p>
          </div>
        </div>
      </section>

      <section class="neighbor">
        <h3 class="section_title">左右邻居</h3>
        <neighbor />
      </section>
      
      <section class="concat">
        <h3 class="section_title"><i class="iconfont icon-youxiang" /> email</h3>   
        <p class="email">weiaican@outlook.com</p>

        <h3 class="section_title"><i class="iconfont icon-weixin" /> wechat</h3>   
        <img src="./images/weixin.jpg" />
      </section>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import TNav from '@/components/nav/nav'
import Neighbor from '@/components/neighbor/neighbor'

export default {
  data() {
    return {}
  },
  methods: {
    timeline() {
      this.$router.push({ name: 'timeline' })
    },
    resume() {
      this.$router.push({
        name: 'resume'
      })
    },
    github() {
      window.open('https://github.com/weiavia')
    }
  },
  components: {
    Scroll,
    TNav,
    Neighbor
  }
}
</script>