<style lang='scss' scoped>
.block {
  .load_shade {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgb(236,244,244);
    transition: all 1s;
  }

  .load_shade.normal {
    opacity: 0;
  }
  .container {
    position: relative;
    padding-bottom: 60px;
  }
  .list {
    position: relative;
    margin: 0 auto;
    .item {
      width: 303.33333px;
      position: absolute;
      transition: all 0.3s;
    }
  }
  .bottom_line {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: $color_level_1;
    padding-bottom: 10px;
    position: absolute;
    bottom: 5px;
    left: 0;

  }
}
</style>

<template>
  <scroll class="block">
    <div class="load_shade" ref="loadShade" />
    <div ref="wrapper" class="container">
      <div class="list" ref="content">
        <t-block :txt="item"  v-for="(item, index) in data" :key="index" class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
      </div>
      <div class="bottom_line">我是有底线的</div>
    </div>
  </scroll>
</template>

<script>
import TBlock from '@/blocks/text'
import MBlock from '@/blocks/music'
import Scroll from '@/components/scroll/scroll'

export default {
  props: {
    list: {
      type: Array,
      defalut: []
    }
  },
  data () {
    return {
      column: 3,
      columnWidth: 303.33333,
      columnGap: 20,
      data: [
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在  dsdf 高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
      ]
    };
  },
  mounted() {
    this.items = document.getElementsByClassName('block_item')
    this.flag = true

    this.waterFall()
    window.addEventListener('resize', () => {
      if(!this.flag)
        return
      setTimeout(() => {
        this.waterFall()
      }, 300)
    })
  },
  methods: {
    waterFall() {
      

      // 根据容器宽度算出共有几列
      // this.column = Math.max( Math.floor( this.$refs.wrapper.offsetWidth / this.columnWidth ), 1 )
      // // 根据列数
      
      // this.columnGap = (this.$refs.wrapper.offsetWidth - this.column * this.columnWidth) / (this.column - 1)
      // this.$refs.content.style.width = this.columnWidth * this.column + ((this.column-1) * this.columnGap) + 'px'

      this.column = Math.max( Math.floor( this.$refs.wrapper.offsetWidth / this.columnWidth ), 1)
      this.$refs.content.style.width = this.columnWidth * this.column + ((this.column-1) * this.columnGap) + 'px'
      // this.columnGap = (this.$refs.wrapper.offsetWidth - this.column * this.columnWidth) / (this.column - 1)

      this.hState = []
      let index = 0
      let items = [].slice.call(this.items)
      items.forEach((item, i) => {
        if(i < this.column) {
          item.style.top = 0 + 'px'
          item.style.left = i * (this.columnWidth + this.columnGap) + 'px'
          this.hState.push(item.offsetHeight)
        } else {
          let min = this.getMin()
          item.style.left = min.index * (this.columnWidth + this.columnGap) + 'px'
          item.style.top = min.value + 20 + 'px'
          this.hState[min.index] = min.value + item.offsetHeight + 20
        }
      })
      this.flag = true

      var max = this.getMin(true)
      this.$refs.wrapper.style.height = max.value + 'px'
      
      this.$nextTick(() => {
        let loadShade = this.$refs.loadShade
        loadShade.classList.add('normal')
        loadShade.addEventListener('transitionend', () => {
          loadShade.style.display = 'none'
        })
      })
    },
    getMin(reversal = false) {
      var o = {
        index: 0,
        value: this.hState[0]
      }
      this.hState.forEach((v, i) => {
        if(v < o.value && !reversal) {
          o.index = i
          o.value = v
        } else if(v > o.value && reversal) {
          o.index = i
          o.value = v
        }
      })
      return o
    }
  },
  components:{
    TBlock,
    MBlock,
    Scroll
  }
}
</script>