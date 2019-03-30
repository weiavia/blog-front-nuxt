<style lang="scss" scoped>
.topbar {
  color: $color_level_1;
  background: $color_section_background;
  height: 35px;
  line-height: 35px;
  padding: 0 15px;
  box-sizing: border-box;
  .link {
    text-decoration: underline;
  }
  .iconfont {
    font-size: 20px;
    margin-right: 8px;
    color: #777
  }
  .right_wrpper {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .placeholder {
    visibility: hidden;
  }
}
</style>

<template>
  <div class="topbar clearfix">
    <span>歌词：月半弯 倚於深宵 晚风轻飘</span>
    <!-- <em class="link pointer fr" @click="back" v-show="backShow">BACK</em> -->
    
    <div class="fr right_wrpper">
      <i class="iconfont icon-xiazai44  pointer" @click="home" v-show="!inIndex"/>
      <i class="iconfont icon-gangbi pointer" @click="write" v-show="penShow"/>
      <el-switch
        class='switch'
        v-model="onOff"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      backShow: false,
      penShow: true,
      offon: true
    }
  },

  computed: {
    onOff: {
      get: function() {
        return this.sidebarShow
      },
      set: function( boolean ) {
        this.setSidebarShow(boolean)
      }
    },
    ...mapGetters(['sidebarShow', 'inIndex'])
  },
  methods: {
    save() {
      window.bus.$emit('save')
    },
    write() {
      this.penShow = false
      this.backShow = true
      this.$router.push({
        path: '/write'
      })
    },
    home() {
      this.$router.replace('/')
    },
    back() {
      this.penShow = true
      this.backShow = false
      this.$router.back()
    },
    ...mapMutations(['setSidebarShow'])
  }
}
</script>