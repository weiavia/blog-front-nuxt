<style lang='sass' scoped>
  .container
    padding: 30px
</style>

<template>
  <div class="container">
    <item v-for="comment, index in comments" :comment="comment" :key="index" />
  </div>
</template>

<script>
import Item from '@/components/comment-item/index'
export default {
  props: ['comments'],
  created() {
    console.log(this.comments)
  },
  components: {
    Item
  }
}
</script>

