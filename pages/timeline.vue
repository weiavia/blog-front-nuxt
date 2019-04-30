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
    .nav {
      width: 200px;
    }
    .main {
      width: calc(100% - 210px);
      height: 100%;
      border-left: 1px solid rgba(255,255,255, .2);
      padding-left: 40px;
      box-sizing: border-box;
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
        & > .iconfont {
          margin-right: 10px;
          color: #333;
          cursor: pointer;
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
      font-size: 16px;
      header {
        display: block;
        padding-bottom: 10px;
        font-size: 12px;
        i {
          font-size: 12px;
        }
      }
      .text {
        color: #058;
      }
    }
    .half {
      width: 50%;
    }

    .imgs {
      width: 200px;
      height: 200px;
      border: 1px solid #eee;
      margin-top: 20px;
      cursor: pointer;
      background: url('../static/cj.jpg') no-repeat center center;
      background-size: cover;
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
  }
</style>

<template>
  <scroll class="timeline clearfix">
    <div class="nav fl">
      <p>2019</p>
      <p>2018</p>
    </div>
    <div class="main fr">
      <div class="textarea">
        <i class="circle" />
        <header class="clearfix">
          <div class="fl">
            <i class="iconfont icon-tupian pointer" title="插入图片"></i>
            <span class="tianqi">&nbsp;&nbsp;<i class="iconfont icon-tianqi" /><span> 长沙 睛 45度,</span></span>
            <span>晚上7.30</span>
          </div>
          <div class="fr">
            <span class="writed" v-show="textareaShow">写好了</span>
          </div>
        </header>
        <textarea v-show="textareaShow"></textarea>
        <footer></footer>
      </div>

      <div class="item">
        <div class="triangle" />
        <div class="circle" />
        <header>
         <i class="iconfont icon-tianqi" /><span> 长沙 睛 45度,</span>
          <span>晚上7.30</span>
        </header>
        <p class="text">
          单四吃鸡，恐怖如斯
        </p>
        <div class="imgs" v-viewer>
          <img src="../static/cj.jpg" />
          <p class="tag">10张</p>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'

export default {
  data () {
    return {
      textareaShow: true
    };
  },
  components: {
    Scroll
  }
}
</script>