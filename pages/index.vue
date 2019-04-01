<style lang='scss' scoped>

</style>

<template>
  <section class="home">
    <list ref="list"/>
  </section>
</template>

<script>
import List from '@/components/list/list'
import { mapGetters, mapMutations } from 'vuex'

export default {
  middleware: 'common',
  data () {
    return {
     
    };
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    store.dispatch('homeBlockList')
  },
  // beforeDestroy() {
  //   this.setInIndex(false)
  // },
  activated() {
    this.$refs.list.waterFall()
  },
  deactivated() {
    this.setInIndex(false)
  },
  computed: {
    ...mapGetters(['sidebarShow'])
  },
  methods: {
    ...mapMutations(['setInIndex'])
  },
  watch: {
    sidebarShow() {
      this.$refs.list.waterFall()
    }
  },
  components:{
    List,
  }
}
</script>

