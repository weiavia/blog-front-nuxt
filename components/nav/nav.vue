<template>
  <div class="nav">
      <div class="list" :class="{hide: !showMore}">
        <nav-item :item='item' :index='index' :current='current' v-for="(item, index) in items" :key="index" @click.native="select(index, item.type)"/>
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
          name: '大前端',
          icon: 'icon-html',
          type: 1
        },
        {
          name: 'Node、后端',
          icon: 'icon-nodejs',
          type: 2
        },
        {
          name: '算法',
          icon: 'icon-zhinengsuanfa',
          type: 5
        },
        {
          name: 'linux',
          icon: 'icon-linux',
          type: 8
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
    select(index, type) {
      if(this.$route.name === 'index') {
        bus.$emit('onClass', type)
      } else {
        this.$router.push({
          name: 'index',
          params: { type }
        })
      }
      this.current = index
    }
  },
  components: {
    navItem
  }
}
</script>

<style lang='scss' scoped>
.nav {
  margin-top: 30px;
  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
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
    margin: 0 10px;
    background: rgba(255, 255, 255, 0.5);
    height: 20px;
    line-height: 20px;
    color: #888;
    font-size: 13px;
  }
}
</style>