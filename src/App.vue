<template>
  <div id="app">
      <!--内容区-->
      <!--底部区-->
      <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'app',
  components: {
    'footer-guide': FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        color: red
</style>
