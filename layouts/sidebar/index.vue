<style lang='scss' scoped>
.sidebar {
  background: $color_section_background;
}
.face {
  text-align: center;
  height: 100px;
  background: url('./images/1.jpg');
  background-size: cover;
  margin-bottom: 50px;
  img {
    width: 100px;
    height: 100px;
    display: inline-block;
    border-radius: 50%;
    transform: translateY(50%);
    animation: rotates 5s linear infinite;
  }
}
@keyframes rotates {
  from {
    transform: translateY(50%) rotate(0deg);
  }
  to {
    transform: translateY(50%) rotate(360deg);
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

  img {
    width: 100%;
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
  <scroll class="sidebar">
    <div class="user">
      <div class="face pointer">
        <img src="./images/0.jpg">
      </div>
      <hgroup class="title">
        <h1>路过一只大侠</h1>
        <h2>给岁月以文明，给时光以生命</h2>
      </hgroup>
    </div>
    <t-nav />

    <section class="about">
      <h3 class="section_title">ABOUT ME</h3>
      <div class="content">
        <div class="item pointer" @click="resume">
          <i class="iconfont icon-guanyuwo"/>
          <p>Resume</p>
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
      <h3 class="section_title">Wechat</h3>   
      <img src="./images/weixin.jpg" />
    </section>
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