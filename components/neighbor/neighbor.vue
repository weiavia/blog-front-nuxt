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
          name: 'Bzqll大佬的博客',
          url: 'https://www.bzqll.com/2019/01/262.html'
        },
        {
          name: 'Litelee大佬的博客',
          url: 'https://teeoo.cn'
        },
        {
          name: 'dodo大佬的博客',
          url: 'https://www.dodoblog.cn/blog'
        },
        {
          name: '七年的博客',
          url: 'https://www.aroad.xyz/'
        },
        {
          name: '曹杰峰的博客',
          url: 'https://www.caojiefeng.com'
        },
        {
          name: '堵文斐个人博客',
          url: 'https://duwenfei.com/'
        },
        {
          name: '禹都一只猫',
          url: 'https://olei.me/'
        }
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