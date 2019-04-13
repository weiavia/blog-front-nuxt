<template>
  <div class="scroll" ref="container">
    <slot />
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css'

export default {
  data () {
    return {
			container: null
    };
  },
  mounted() {
		this.container = this.$refs.container
		this.scroller = null
		this.init()
	},
	methods: {
		init() {
			
			this.scroller = new PerfectScrollbar(this.container, {})
			this.container.addEventListener('ps-y-reach-end', () => {
				if(this.container.scrollTop > 0) {
					this.$emit('onEnd')
				}
			})
		},
		refresh() {
			this.scroller.update()
		},
		toTop() {
			this.container.scrollTop = 0
		}
	}
}
</script>

<style lang='sass' scoped>
	.scroll
		overflow: hidden
		height: 100%
		position: relative
</style>