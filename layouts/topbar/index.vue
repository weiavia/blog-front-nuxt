<style lang="scss" scoped>
.topbar {
  color: $color_level_1;
  background: $color_section_background;
  height: 35px;
  line-height: 35px;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .left_wrpper {
    flex-grow: 1;
  }
  .right_wrpper {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .link {
    text-decoration: underline;
  }
  .iconfont {
    font-size: 20px;
    margin-right: 8px;
    color: #777
  }
  .placeholder {
    visibility: hidden;
  }
  .search {
    width: 90%;
    outline: none;
    background: none;
    border: none;

  }
}
</style>

<template>
  <div class="topbar clearfix">
    <!-- <em class="link pointer fr" @click="back" v-show="backShow">BACK</em> -->
    <div class="left_wrpper">
      <span v-if="!searchShow">欢迎来到我的小站，这里有我的总结学习笔记 、还有一些想对自己说的话。</span>
      <input type="text" class="search" ref="searchInput" v-show='searchShow'/>
    </div>

    <div class="right_wrpper">
      <i class="iconfont pointer" :class="searchShow ? 'icon-guanbi' :'icon-sousuo'" @click="searchShow = !searchShow"/>
      <i class="iconfont icon-xiazai44  pointer" @click="home" v-show="route !== 'index'"/>
      <i class="iconfont icon-gangbi pointer" @click="write" v-show="route !== 'write'"/>
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
      searchShow: true,
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
    ...mapGetters(['sidebarShow', 'route'])
  },
  methods: {
    save() {
      window.bus.$emit('save')
    },
    write() {
      this.penShow = false
      this.backShow = true
      this.$router.push({
        name: 'write'
      })
    },
    home() {
      this.penShow = true
      this.$router.replace('/')
    },
    back() {
      this.backShow = false
      this.$router.back()
    },
    ...mapMutations(['setSidebarShow'])
  },
  watch: {
    searchShow(boolean) {
      if(boolean) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus()
        })
      }
    }
  }
}
</script>