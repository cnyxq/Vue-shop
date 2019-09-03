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
import { reqFoodTypes } from './api'
export default {
  name: 'app',
  components: {
    'footer-guide': FooterGuide
  },
  async mounted () {
    const result = await reqFoodTypes()
    console.log(result)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
