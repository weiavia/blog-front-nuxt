<style lang='sass' scoped>
  .container 
    font-size: 14px
    display: flex
    padding: 10px 0
    border-bottom: 1px dotted $color_level_2
    .face
      width: 50px
      height: 50px
      border-radius: 50%
      margin-right: 30px
      flex-wrap: nowrap
    .main
      flex-grow: 1
      .info
        margin-bottom: 10px
        height: 20px
        line-height: 20px
      .name
        font-size: 15px
        padding-right: 10px
        display: inline-block
      .floor
        font-size: 12px
      .time, .icon-shijian
        font-size: 12px
      .text
        font-size: 14px
        line-height: 1.5
        color: #666
        margin-bottom: 15px
      .like_wrpper
        text-align: right
        cursor: pointer
        .like
          color: red
      .iconfont
        font-size: 14px
      .reply_btn
        text-decoration: underline
        color: #666
        margin-left: 15px
    .quote
      width: 100%
      border-radius: 6px
      // background: rgba(255,255,255, 0.6)
      border: 1px dotted $color_level_2
      margin: 10px 0 20px 0
      color: red
      padding: 10px
      box-sizing: border-box
      font-size: 12px
      .info
        color: $color_level_2
        margin-bottom: 10px
        // text-decoration: underline
      p
        color: $color_level_2
        line-height: 1.5
</style>

<template>
  <div class="container">
    <img class="face" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553607319425&di=76ad6532269991a6ada54fc56286c171&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a3865ab91314a8012062e3c38ff6.png%401280w_1l_2o_100sh.png"/>
    <div class="main">
      <div class="info">
        <span class="name">{{comment.name}}</span>
        <time class="time"><i class="iconfont icon-shijian" /> 2018.06.02</time>
        <span class="fr floor">{{comment.floor}}楼</span>
      </div>
      <p class="text">{{comment.content}}</p>
      <div class="quote" v-if="comment.quote_id">
        <div class="info">
          {{comment.quote_id.name}} - {{comment.quote_id.floor}}楼 :
        </div>
        <p>{{comment.quote_id.content}}</p>
      </div>
      <div class="like_wrpper">
        <no-ssr>
          <span :class="{'like': comment.isLike}" @click="onLike(comment)">
            <i class="iconfont icon-xihuan" /> {{comment.praise_number}}
          </span>
        </no-ssr>
        <span class="reply_btn" @click='reply'>回复</span>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/comment-item/index'
import { getId, setId } from '@/helper'
import { praise } from '@/api/common'
import { PRAISE_TYPE } from '@/config/enum'

export default {
  props: ['comment'],
  data() {
    return {
      flagOk: false
    }
  },

  methods: {
    onLike(comment) {
      if(!this.comment.isLike) {
        praise({type: PRAISE_TYPE.COMMENT, id: this.comment.id })
        this.comment.praise_number ++
        this.comment.isLike = true
        setId('comment_like', comment.id)
      }
    },
    reply() {
      this.$emit('reply', this.comment.id)
    }
  }
}
</script>

