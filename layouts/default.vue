<style lang='scss' scoped>
  .container {
    height: 100vh;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0 15px;
    box-sizing: border-box;
    .main {
      position: relative;
      width: calc(100% - 320px);
      height: 100%;
      flex-grow: 1;
      .topbar {
        width: 100%;
        margin-bottom: 20px;
      }
      .page {
        width: 100%;
        height: calc(100% - 50px);
      }
    }

    .slidebar {
      width: 300px;
      height: 100%;
      margin-left: 20px;
    }
  }
</style>

<template>
  <div>
    <div class="background" />
    <div class="container">
      <div class="main">
        <topbar class="topbar"/>
        <Nuxt class="page" keep-alive />
      </div>
      <sidebar class="slidebar" v-show="sidebarShow"/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/layouts/sidebar/index'
import Topbar from '@/layouts/topbar/index'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {

    }
  },
  mounted() {
    window.vm = this
  },
  computed:  {
    ...mapGetters(['sidebarShow'])
  },
  components: {
    Sidebar,
    Topbar
  }
}
</script>