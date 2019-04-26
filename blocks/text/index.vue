<style lang="scss" scoped>
  @import url('../../static/style/block-common.scss');
</style>

<template>
  <div class="tBlock block_item section_background">
    <p class="class">{{block.type | className}}</p>
    <h2 class="title">{{block.title}}</h2>
    <time>{{block.creteTime | time}}</time>
    <p class="sketch">{{block.subTitle}}</p>
    <div class="readAll" @click="onDetail">阅读全文</div>
    <div class="operate">
      <i class="iconfont icon-xiaoxi"> {{block.comment_count}}</i>
      <i class="iconfont icon-xihuan"> {{block.like}}</i>
      <i class="iconfont icon-chakan"> {{block.look}}</i>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/helper'
import { classMenu, CLASS_TYPE } from '@/config'
import { articleFilter } from '@/mixin'

export default {
  props: ['block'],
  mixins: [articleFilter],
  data () {
    return {
    };
  },
  methods: {
    onDetail() {
      if(this.block.type === CLASS_TYPE.RESUME) {
        this.$router.push({
          name: 'resume'
        })
      } else {
        this.$router.push({
          path: `/article/${this.block.id}`
        })
      }
    }
  }
}
</script>
