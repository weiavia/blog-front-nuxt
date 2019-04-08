<style lang="scss" scoped>
  @import url('../../static/style/block-common.scss');
</style>

<template>
  <div class="tBlock block_item">
    <p class="class">算法&数据结构</p>
    <h2 class="title">{{block.title}}</h2>
    <time>{{block.creteTime | time}}</time>
    <p class="sketch">{{block.subTitle}}</p>
    <div class="readAll" @click="onDetail">阅读全文</div>
    <div class="operate">
      <i class="iconfont icon-xiaoxi"> {{block.comment_count}}</i>
      <i class="iconfont icon-chakan"> 2k</i>
      <i class="iconfont icon-xihuan"> {{block.praise_number}}</i>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/helper'

export default {
  props: ['block'],
  data () {
    return {
    };
  },

  methods: {
    onDetail() {
      bus.$emit('showDetail', this.block.id)
      this.$router.push({
        path: `/article/${this.block.id}`
      })
    }
  },

  filters: {
    time(date) {
      let time = formatTime(date)
      return `${time.year}年${time.month}月${time.day}日 ${time.hour}:${time.minute}:${time.second}`
    }
  }
}
</script>
