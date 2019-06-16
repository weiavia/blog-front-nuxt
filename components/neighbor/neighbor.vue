<template>
  <div class="nav">
      <div class="list" :class="{hide: !showMore}">
        <el-tooltip :content="item.name" placement="top" :enterable="false" v-for="item,index in items" :key="index">
          <div class="item pointer" @click="jump(item.url)">{{ item.name | firstChar}}</div>
        </el-tooltip>
      </div>
      <div class="more pointer" @click="showMore=!showMore">{{showMore ? 'hide' : 'more'}}</div>
  </div>
</template>

<script>
import navItem from '@/components/nav-item/nav-item'
export default {
  data () {
    return {
      showMore: false,
      current: 0,
      items: [
        {
          name: '鼻子亲了脸 - 有非常多的API 特别感谢大佬提供的音乐API',
          url: 'https://www.bzqll.com/2019/01/262.html'
        },
        {
          name: 'dodo - 有很多开源库的前端大佬',
          url: 'https://www.dodoblog.cn/blog'
        },
        {
          name: '鑫 - 志同道合的前端大佬',
          url: 'https://www.ilxin.cn'
        },
        {
          name: '关中刀客在青岛 - 经历非富的前端',
          url: 'http://e-art.top'
        },
        {
          name: '忆梦 - 何叶',
          url: 'https://www.54loli.cn'
        },
        {
          name: '堵文斐 - 一位PHP大佬',
          url: 'https://duwenfei.com/'
        },
        {
          name: 'Stephen - 全栈大佬',
          url: 'https://www.stephen520.cn/'
        },
      ]
    };
  },
  created() {
    this.current = this.items.length - 1
  },
  methods: {
    jump(url) {
      window.open(url)
    },
    select() {
      
    }
  },
  filters: {
    firstChar(str) {
      return str.charAt(0)
    }
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
.nav {
  margin-top: 20px;
  .list {
    display: flex;
    flex-wrap: wrap;
    &.hide {
      height: 70px;
      overflow: hidden;
    }
    .item {
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.5);
      margin-bottom: 10px;
      margin-right: 13.3333333px;
      text-align: center;
      line-height: 60px;
      position: relative;
      font-size: 24px;
      color: $color_level_2;
      position: relative;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        filter: grayscale(50%);
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
      i {
        font-size: 30px;
      }
    }
  }
  .more {
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    height: 20px;
    line-height: 20px;
    color: #888;
    font-size: 13px;
  }
}
</style>