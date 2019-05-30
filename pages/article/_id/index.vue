<style lang='sass' scoped>
  .article
    color: #333
    background: rgba(255,255,255, .3)
    h1 
      font-size: 30px
      font-weight: bold
      text-align: center
      padding: 30px 0
    .info
      text-align: center
      font-size: 14px
      margin-bottom: 30px
      color: #666
      .iconfont
        font-size: 14px
      .icon-gangbi
        font-size: 18px
      .like
        color: red
      .item
        padding: 5px
    .content
      min-height: 300px
      /** 暂时重写子组件样式 **/
      & /deep/ .v-note-wrapper 
        background: none
      & /deep/ .v-note-panel
        border: none !important
        box-shadow: none !important
      & /deep/ .v-show-content
        background: none !important
  .operation
    padding: 30px 0 0 30px
    color: #333
    font-size: 16px
    span
      margin-right: 15px
      text-decoration: underline
      cursor: pointer
</style>

<template>
  <scroll class="article " ref="scroller"  v-if="article">
    <h1>{{article.title}}</h1>
    <div class="info">
      <time class="item"><i class="iconfont icon-shijian" /> {{article.creteTime | time}}</time>
      <span class="look_num item"><i class="iconfont icon-chakan" /> {{article.look}}</span>
      <span class="like_num item" @click="onLove"><i class="iconfont icon-xihuan pointer" :class="{like: isLike}"/> {{article.like}}</span>
      <span class="class item"><i class='iconfont icon-all' /> {{article.type | className}}</span>
      <i class="iconfont icon-gangbi pointer" @click="onModify"/>
    </div>
    
    <div class="content">
      <no-ssr>
        <mavon-editor  class="v-note-wrapper" v-show="showEditor" 
        fontSize="16px" 
        defaultOpen="preview"
        :boxShadow="boxShadow"
        codeStyle="atelier-cave-dark"
        placeholder="烹羊宰牛且为乐，会须一饮三百杯"
        :toolbarsFlag="toolbarsFlag"
        :value="article.content"
        />
      </no-ssr>
    </div>
    <div class="operation">
      <span @click="onComment">写评论</span>
      <span class="construction">分享</span>
      <!-- <span class="construction">复制文章URL到剪切板</span> -->
    </div>
    <comment @reply="onReply" :article="article"/>
    <reply ref="reply"/>
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import Comment from '@/components/comment/index'
import Reply from '@/components/reply/reply'
import { findOneById, updateOne } from '@/api/block'
import { COMMENT_TYPE } from '@/config/enum.js'
import { articleFilter } from '@/mixin'
import { setId, getId } from '@/helper'

const LIKE_ADD = 2

export default {
  middleware: 'common',
  mixins: [articleFilter],
  data () {
    return {
      article: null,
      boxShadow: true,
      toolbarsFlag: false,
      showEditor: true,
      isLike: false
    }
  },

  // 动态参数校验
  validate({ params }) {
    let id = params.id
    if(!id || !parseInt(id)) {
      return false
    }
    return true
  },

  // 预取数据
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    let article = await findOneById(params.id)
    article.content = article.article.content
    return { article }
  },

  async mounted() {
    this.$nextTick(() => {
      this.$refs.scroller.refresh()
    })

    bus.$emit('showDetail', this.article.id)


    if(getId('block_love', this.article.id)) {
      this.isLike = true
    }
  },

  methods: {
    onLove() {
      if(!getId('block_love', this.article.id)) {
        setId('block_love', this.article.id)
        updateOne(this.article.id, {
          updateType: LIKE_ADD
        })
        this.article.like ++
        this.isLike = true
      }
    },
    onModify() {
      this.$router.push({
        name: 'write',
        params: { isModify: true, article: this.article }
      })
    },
    onReply(quote_id) {
      this.$refs.reply.show(COMMENT_TYPE.REPLY, this.article.id, quote_id)
    },
    onComment() {
      this.$refs.reply.show(COMMENT_TYPE.ARTICLE, this.article.id)
    }
  },
  components: {
    Scroll,
    Comment,
    Reply
  }
}
</script>