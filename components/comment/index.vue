<style lang='scss' scoped>
  .container {
    padding: 30px;
    .more {
      text-decoration: underline;
      padding-top: 20px;
      font-size: 14px;
      text-align: center; 
      color: $color_level_2;
    }
    .more.noMore {
      cursor: default;
      text-decoration: none;
    }
    .emtpy {
      font-size: 30px;
      text-align: center;
      padding: 60px 0;
      color: $color_level_2;
    }
  }
</style>

<template>
  <div class="container">
    <item v-for="(comment, index) in comments" :comment="comment" :key="index" @reply="reply"/>
    <div class="more pointer" :class="{noMore: moreState=='没有更多了'}" @click="onMore" v-if="this.comments.length">{{moreState}}</div>
    <div class="emtpy" v-else>评论区空空如也</div>
  </div>
</template>

<script>
import Item from '@/components/comment-item/index'
import { getCommentsByThemeId } from '@/api/comment'
import { setId, getId } from '@/helper'
import { returnStatement } from '@babel/types';

export default {
  props: ['article'],
  data () {
    return {
      skip: 0,
      comments: [],
      moreState: '查看更多'
    }
  },
  created() {
    if(this.article) {
      this.count = this.article.comment.count
      this.comments = this.article.comment.comments

      // 设置初始值
      this.comments.map((comment) => {
        comment.isLike = false
      })

      if(this.count <= this.comments.length) {
        this.moreState = '没有更多了'
      }
    }
  },
  mounted() {
    this.addLikeFlag()
  },
  methods: {
    reply(quote_id) {
      this.$emit('reply', quote_id)
    },
    async onMore() {
      if(this.moreState !== '没有更多了') {
        this.moreState = '加载中'
        this.skip ++
        let comment = await getCommentsByThemeId(this.article.id, this.skip)
        this.comments = this.comments.concat(comment.comments)
        this.addLikeFlag()
        if(comment.count <= this.comments.length) {
          this.moreState = '没有更多了'
        } else {
          this.moreState = '查看更多'
        }
      } 
    },
    // 服务端没有localstorge所在要在mounted后计算 isLike
    addLikeFlag() {
      this.comments.map((comment) => {
        comment.isLike = getId('comment_like', comment.id)
      })
      // console.log(this.comments)
    }
  },
  components: {
    Item
  }
}
</script>

