<style lang='scss' scoped>
  .resume {
    background: rgba(255,255,255, .3);
    color: #333;
    padding-top: 30px;
    .me {
      width: 200px;
    }
  }
  .tag {
    width: 200px;
    height: 40px;
    line-height: 40px;
    background: rgba(255,255,255, 0.5);
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-indent: 1em;
    margin-bottom: 20px;
  }
</style>

<template>
  <div class="resume">
    <div class="tag">我的名字: 廖威</div>
    <img src="../static/images/resume/0.jpg" class="me"/>
  </div>
</template>

<script>
export default {
  middleware: 'common',
  data () {
    return {
    };
  },
}
</script>