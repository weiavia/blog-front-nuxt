<style lang='scss' scoped>

</style>

<template>
  <section class="home">
    <list ref="list" :blocks="blocks" />
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
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    await store.dispatch('getBlocks')
  },
  mounted() {
    // console.log(this.blocks)
  },
  activated() {
    this.$refs.list.waterFall()
  },
  deactivated() {
    this.setInIndex(false)
  },
  computed: {
    ...mapGetters(['sidebarShow', 'blocks'])
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

