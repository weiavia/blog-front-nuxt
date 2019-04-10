<template>
  <div class="write" v-loading="loading" style="position: relative;">
    <input type="text" class="title" placeholder="将进酒" v-model="title"/>
    <input type="text" class="desc" placeholder="君不见，黄河之水天上来，奔流到海不复回  君不见，高堂明镜悲白发，朝如青丝暮成雪" v-model="subTitle"/>
    <no-ssr>
      <mavon-editor v-model="value" class="v-note-wrapper" v-show="showEditor" 
        ref="md"
        fontSize="16px" 
        defaultOpen="edit"
        :boxShadow="boxShadow"
        :toolbars="toolbars"
        :ishljs = "ishljs"
        placeholder="烹羊宰牛且为乐，会须一饮三百杯"
        :toolbarsFlag="toolbarsFlag"
        @save="writeEnd"
        @imgAdd="imgAdd"
      />
    </no-ssr>
    <el-dialog
      :lock-scroll="false"
      :title="title"
      :visible.sync="dialogVisible"
      :center="true">

      <el-dropdown @command="handleClass">
        <el-button type="primary">
          {{classValue || '选择分类'}}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command='item.type' :key="index" v-for="(item, index) in classMenu">{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div slot="footer">
        <el-button type="primary" @click="onSave">选好了</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import toolbars from '@/config/editor'
import { write, updateOne } from '@/api/block'
import { classMenu } from '@/config'
import { uploadFile } from '@/api/common'

export default {
  middleware: 'common',
  data () {
    return {
      title: '',
      subTitle: '',
      value: '',
      type: 0,
      boxShadow: false,
      toolbars: toolbars,
      ishljs: true,
      toolbarsFlag: true,
      loading: false,
      showEditor: true,
      dialogVisible: false,
      classMenu,
      classValue: 0,
      isModify: false,
      id: 0,
      content: ''
    };
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // article页面跳过来修改？
    if(params.isModify) {
      return { 
        isModify: params.isModify,
        value: params.article.article.content,
        title: params.article.title,
        subTitle: params.article.subTitle,
        type: params.article.type,
        id: params.article.id
      }
    }
  },
  methods: {
    async imgAdd(pos, file) {
      let response = await uploadFile(file)
      this.$refs.md.$img2Url(pos, response.data.data)
    },
    writeEnd(content) {
      this.content = content
      // 如果是新增选择分类
      if(!this.isModify) {
        this.dialogVisible = true
      } else {
        this.onSave()
      }
    },
    async onSave() {
      let data = {
        article: this.content,
        title: this.title,
        subTitle: this.subTitle,
        type: this.type
      }

      // 修改还是新增？
      if(this.id && this.isModify) {
        await updateOne(this.id, data)
        this.$notify.success({ title: '提示', message: '修改成功!', position: 'bottom-right' });
      } else {
        let block = await write(data)
        this.id = block.id
        this.isModify = true
        this.$notify.success({ title: '提示', message: '新增成功!', position: 'bottom-right' });
      }
      
      this.dialogVisible = false
    },
    handleClass(type) {
      this.type = type
      let menu = classMenu.find((menu) => {
        return menu.type === type
      })
      this.classValue = menu.name
    }
  }
}
</script>

<style lang='sass' scoped>  
  .write
    background: #fff
    color: #333
    .title
      border: none
      height: 50px
      width: 100%
      padding: 0 15px
      outline: none
      font-size: 20px
      box-sizing: border-box
      border-bottom: 1px solid #eee
    .desc
       box-sizing: border-box
       padding: 0 15px
       border: none
       outline: none
       height: 50px
       line-height: 50px
       width: 100%
  .v-note-wrapper
    height: calc(100% - 100px)
</style>