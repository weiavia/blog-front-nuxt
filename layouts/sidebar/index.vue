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
</style>

<template>
  <scroll class="sidebar">
    <div class="user">
      <div class="face">
        <img src="./images/0.jpg">
      </div>
      <hgroup class="title">
        <h1>路过一只大侠</h1>
        <h2>给岁月以文明，给时光以生命</h2>
      </hgroup>
    </div>
    <t-nav />
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import TNav from '@/components/nav/nav'
export default {
  data() {
    return {}
  },
  components: {
    Scroll,
    TNav
  }
}
</script>