<template>
  <div id="app">
      <!--内容区-->
      <router-view></router-view>
      <!--底部区-->
      <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'app',
  components: {
    'footer-guide': FooterGuide
  },
  mounted () {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
