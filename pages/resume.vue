<style lang='scss' scoped>
  .resume {
    background: rgba(255,255,255, .8);
    color: #333;
    padding: 30px 0;
    box-sizing: border-box;
    .statement {
      margin-bottom: 20px;
      .me {
        width: 200px;
      }
      .content {
        width: calc(100% - 210px);
        box-sizing: border-box;
        padding: 0 10px;
        line-height: 1.8;
        p {
          margin-bottom: 10px;
        }
        em {
          font-weight: bold;
        }
      }
    }
    .technology {
      margin-bottom: 30px;
      text-indent: 1em;
    }
    .site {
      padding-left: 1em;
      margin-bottom: 60px;
      p {
        margin-bottom: 14px;
      }
    }
  }
  .tag {
    width: 200px;
    height: 40px;
    line-height: 40px;
    background: rgba(255,255,255, 0.5);
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-indent: 1em;
    margin-bottom: 20px;
  }
  .opreation {
    text-align: center;
    font-size: 30px;
    a {
    color: #333;
    }
    
  }
</style>

<template>
  <scroll class="resume">
    <div class="tag">我的名字: 廖威</div>
    <div class="statement clearfix">
      <img src="../static/images/resume/0.jpg" class="me fl"/>
      <div class="fr content">
        <p>出生于1999-04-24, 是一名全栈工程师（就是什么都有接触，什么都不怎么精通的那种），喜欢看仙侠小说（道君、飞天），喜欢打游戏（PUBG单人四排吃鸡大神）， 目前在长沙做一名前端。</p>
        <p>
          2014年8月那个夏天来到了衡阳技师学院，在校的四年全靠自学记得第一次入门前端看的是传智播客张鹏老师的7天搞定html+css, 
          当时看了视频跟着敲一篇感觉好简单,在跟着李炎恢的课程做出了几个静态网站，当学到js(第一门编程语言)时一脸懵逼什么函数作用域各种调用返回值学的乱七八糟的，
          最后在网上找到了BLUE老师的JS视频讲的易懂又幽默（用了3个多月看了N篇终于学会了JS基础），然后就会做一些小效果（选项卡轮播图之类的）,
          在用了几个月的时间学了韩顺平《php从入门到精通》149集(听它的课是一种享受) 最后终于做出来了一个论坛也算是入门了WEB开发吧。
        </p>
        <p>
          大学几年里很幸运有 <em>妙味课堂</em>(前端领域说第二应该没人敢说第一吧?)  <em>慕课网</em>(各种实战扩充了我的视野)  这种教育平台。
        </p>
      </div>
      <!-- 君不见，黄河之水天上来，奔流到海不复回 君不见，高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。  烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。与君歌一曲，请君为我倾耳听。钟鼓馔玉不足贵，但愿长醉不复醒。古来圣贤皆寂寞，惟有饮者留其名。陈王昔时宴平乐，斗酒十千恣欢谑。主人何为言少钱，径须沽取对君酌。五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。 -->
    </div>
    <div class="tag">我的技术栈</div>
    <p class="technology">
      JavaScript、Html、Css、NodeJs、Php、Mysql、Linux
    </p>
    <div class="tag">关于本站</div>
    <div class="site">
      <p>前后端全是纯手写、前端设计是自己跟着感觉来的不知道什么色好看所以就用了透明色。</p>
      <p>前端: Vue(<a href="https://zh.nuxtjs.org/">Nuxt.js 开箱即用的Vue服务端渲染框架</a>)</p>
      <p>前端Ui库: <a href="https://element.eleme.io/#/zh-CN">Element</a></p>
      <p>后端: Nodejs(<a href="https://nestjs.com/">Nestjs Typescript为开发语言, node版的spring</a>)</p>
      <p>数据库: Mysql</p>
      <p>服务器: Centos7.5 (腾讯云服务器)</p>
    </div>
    <p class="opreation"><a href="javascript:;" @click="onComment">给我留言</a></p>
    <reply ref="reply" :isResume="true"/>
    <comment :article="resume" @reply="onReply"/>
  </scroll>
</template>

<script>
import Reply from '@/components/reply/reply'
import Comment from '@/components/comment'
import Scroll from '@/components/scroll/scroll'
import { COMMENT_TYPE } from '@/config/enum.js'
import { GetResume } from '@/api/block'
import { nullLiteral } from '@babel/types';

export default {
  middleware: 'common',
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    let resume = await GetResume()
    return { resume }
  },
  data () {
    return {
      resume: null
    };
  },
  mounted() {
    bus.$on('reply', (quote_id) => {
      this.onReply(quote_id)
    })
  },
  methods: {
    onComment() {
      this.$refs.reply.show(COMMENT_TYPE.ARTICLE, 1)
    },
    onReply(quote_id) {
      this.$refs.reply.show(COMMENT_TYPE.REPLY, this.resume.id, quote_id)
    },
  },
  components: {
    Scroll,
    Comment,
    Reply
  }
}
</script>