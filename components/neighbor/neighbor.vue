<template>
  <div class="nav">
      <div class="list" :class="{hide: !showMore}">
        <el-tooltip content="曹杰峰的博客" placement="top" :enterable="false">
          <div class="item pointer">曹</div>
        </el-tooltip>
        <el-tooltip content="禹都一只猫" placement="top" :enterable="false">
          <div class="item pointer">禹</div>
        </el-tooltip>
        <el-tooltip content="曹杰峰的博客" placement="top" :enterable="false">
          <div class="item pointer">曹</div>
        </el-tooltip>
        <el-tooltip content="曹杰峰的博客" placement="top" :enterable="false">
          <div class="item pointer">曹</div>
        </el-tooltip>
        <el-tooltip content="曹杰峰的博客" placement="top" :enterable="false">
          <div class="item pointer">曹</div>
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
          name: '',
          icon: 'icon-html',
          type: 1
        },
        {
          name: 'Python',
          icon: 'icon-python',
          type: 7
        },
        {
          name: '算法&数据结构',
          icon: 'icon-zhinengsuanfa',
          type: 5
        },
        {
          name: '数学',
          icon: 'icon-shuxue',
          type: 3
        },
        {
          name: '英语',
          icon: 'icon-yingyushuiping',
          type: 6
        },
        {
          name: '音乐',
          icon: 'icon-yinle',
          type: 4
        },
        {
          name: 'linux',
          icon: 'icon-linux',
          type: 8
        },
        {
          name: '所有的',
          icon: 'icon-all',
          type: 0
        }
      ]
    };
  },
  created() {
    this.current = this.items.length - 1
  },
  methods: {
    select() {
      
    }
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
.nav {
  margin-top: 30px;
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
      color: #555;
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