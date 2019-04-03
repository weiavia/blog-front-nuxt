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
  }
</style>

<template>
  <div class="container">
    <item v-for="comment, index in comments" :comment="comment" :key="index" />
    <div class="more pointer" @click="onMore">{{moreState}}</div>
  </div>
</template>

<script>
import Item from '@/components/comment-item/index'
import { getCommentsByThemeId } from '@/api/comment'

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
    this.count = this.article.comment.count
    this.comments = this.article.comment.comments

    // console.log(this.comments)
  },
  methods: {
    async onMore() {
      if(this.moreState !== '没有更多了') {
        this.moreState = '加载中'
        this.skip ++
        let comment = await getCommentsByThemeId(this.article.id, this.skip)
        this.comments = this.comments.concat(comment.comments)

        if(comment.count <= this.comments.length) {
          this.moreState = '没有更多了'
        } else {
          this.moreState = '查看更多'
        }
      } 
    }
  },
  components: {
    Item
  }
}
</script>

