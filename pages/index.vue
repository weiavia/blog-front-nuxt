<template>
  <section class="home">
    <list ref="list" :blocks="blocks" />
  </section>
</template>

<script>
import List from '@/components/list/list'
import { mapGetters, mapMutations } from 'vuex'
import { setId, getId } from '@/helper'
import { updateOne, searchByKeyWord } from '@/api/block'
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, switchMap } from 'rxjs/operators';

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

    // 使用rxjs监听topbar上搜索框的keyup事件
    const searchKeyUp = fromEvent(document.querySelector('#searchInput'), 'keyup')
    const searchKeyUpObserver = searchKeyUp.pipe(
                                  debounceTime(250), 
                                  pluck('target', 'value'),
                                  switchMap((keyword) => searchByKeyWord(keyword))
                                )
    searchKeyUpObserver.subscribe((blocks) => {
 
      this.setBlocks({blocks: blocks})
      this.$nextTick(() => {
        this.$refs.list && this.$refs.list.waterFall()
      })
    })
  },
  methods: {
    ...mapMutations(['setBlocks'])
  },
  activated() {
    this.$refs.list.waterFall()
  },
  computed: {
    ...mapGetters(['sidebarShow', 'blocks'])
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

