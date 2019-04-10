<template>
  <section class="home">
    <list ref="list" :blocks="blocks" />
  </section>
</template>

<script>
import List from '@/components/list/list'
import { mapGetters, mapMutations } from 'vuex'
import { setId, getId } from '@/helper'
import { updateOne } from '@/api/block'

const LOOK_ADD = 1

export default {
  middleware: 'common',
  data () {
    return {
     
    };
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    await store.dispatch('getBlocks', {type: params.type || 0,  skip: 0, changeClass: true})
  },
  mounted() {
    // 如果localstorge没有id记录，block.look+1  
    bus.$on("showDetail", (block_id) => {
      if(!getId('block_show', block_id)) {
        setId('block_show', block_id)
        updateOne(block_id, {
          updateType: LOOK_ADD
        })
      }
    })
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

