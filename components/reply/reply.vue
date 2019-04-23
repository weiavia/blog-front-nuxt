<style lang='scss' scoped>
  .container {
    & /deep/ .el-textarea__inner {
      min-height: 200px !important;
    }

    .baseinfo {
      display: flex;
      justify-content: space-between;
      .input {
        width: 48%;
      }
    }

    .emoji {
      display: flex;
      justify-content: center;
      
      flex-wrap: wrap;
      span {
        padding: 0 5px;
        font-size: 20px;
        cursor: pointer;
        margin-bottom: 12px;
      }
    }
  }
</style>

<template>
  <div class="container">
    <el-dialog
      class="dialog"
      :lock-scroll="false"
      :title="title"
      :visible.sync="dialogVisible"
      :center="true"
      :before-close="handleClose">
      <el-form ref="form" :model="form" labelPosition="top" label-width="80px">
        <div class="baseinfo">
          <el-input v-model="form.name" placeholder="你的名字，2 < name.length < 6" class="input mb10"></el-input>
          <el-input v-model="form.url" placeholder="你的主页" class="input"></el-input>
        </div>
        <p class="emoji">
          <span v-for="item in emoji" @click="onEmoji">{{item}}</span>
        </p>
        <el-form-item>
          <el-input type="textarea" v-model="form.content" class="mb10" placeholder="内容写在这"/>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="onSave">写完了</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { COMMENT_TYPE } from '@/config/enum.js'
import { createComment } from '@/api/comment'
import { deleteNullKey } from '@/helper'

export default {
  props: {
    isResume: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogVisible: false,
      form: {
        content: '',
        concat: '',
        name: '',
        url: '',
        block_id: 0,
        quote_id: 0
      },
      emoji: ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😛', '😜', '😝', '😒', '😓', '😔'],
      title: ''
    };
  },
  methods: {
    async onSave() {
      let data = deleteNullKey(this.form)
      data.isResume = this.isResume
      await createComment(data)

      this.form.name = ''
      this.form.content = ''
      this.form.url = ''

      this.dialogVisible = false
      this.$notify({
        title: '成功',
        message: '你的评论提交成功，大侠审核后可见！',
        type: 'success'
      });
    },

    onEmoji(event) {
      let content = this.form.content
      content = content + event.target.innerHTML
      this.form.content = content
    },

    handleClose() {
      this.dialogVisible = false
    },
    
    show(type, block_id, quote_id = '') {
      this.form.block_id = block_id
      this.form.quote_id = quote_id

      if(type === COMMENT_TYPE.ARTICLE) {
        this.title = '自古评论出淫才'
      } else {
        this.title = '回复年少不听张学友的评论'
      }
      
      this.dialogVisible = true
    }
  }
}
</script>