<style lang="scss" scoped>
.error {
  background: $color_section_background;
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin-bottom: 40px;
  }
  a {
    color: #333;
  }
}
</style>

<template>
  <div class="error">
    <h1>{{error.message}}</h1>
    <nuxt-link to="/">HOME</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  created() {
    console.log(this.error)
  }
}
</script>