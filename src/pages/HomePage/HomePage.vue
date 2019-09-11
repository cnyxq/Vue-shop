<template>
    <section class="content">
        <div class="on">
            <section class="homepage">
                <!--首页头部-->
                <header-top :title="this.$store.state.address.name">
                    <span class="header_search" slot="left">
                        <router-link class="iconfont icon-sousuo" to="/search"></router-link>
                    </span>
                    <span class="header_login" slot="right">
                        <router-link class="header_login_text" :to="userInfo._id ? '/userInfo' : '/login'">{{userInfo._id ? '我的' : '登录|注册'}}</router-link>
                    </span>
                </header-top>
                <!--首页导航-->
                <nav class="homepage_nav">
                    <div class="swiper-container" v-if="foodTypesArr.length">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(foodTypes, index) in foodTypesArr" :key="index">
                                <a href="javascript:" class="link_to_food" v-for="(item, index) in foodTypes" :key="index">
                                    <div class="food_container">
                                        <img :src="baseImageUrl+item.image_url">
                                    </div>
                                    <span>{{item.title}}</span>
                                </a>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                    <img src="./images/msite_back.svg" alt="back" v-else>
                </nav>
                <!--首页附近商家-->
                <shop-list></shop-list>
            </section>
        </div>
    </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'homePage',
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    created () {
      this.getAddress()
      this.getFoodTypes()
    },
    mounted () {
      /*new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })*/
      //this.$store.dispatch('getAddress')
    },
    methods: {
      ...mapActions(['getAddress','getFoodTypes']),
    },
    watch: {
      foodTypesArr () { // 数据更新之后，界面更新后创建swiper对象
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    },
    computed: {
      ...mapState(['userInfo']),
      /*由于页面显示缘故，得将数据每八个存进二维数组中*/
      foodTypesArr () {
        const foodTypesArr = [] // 总数组
        let minArr = [] // 每八个组成的小数组
        const foodTypes = this.$store.state.foodTypes
        foodTypes.forEach( item => {
          if (minArr.length === 8) {
            minArr = []
          }
          if (minArr.length === 0) {
            foodTypesArr.push(minArr)
          }
          minArr.push(item)
        })
        return foodTypesArr
      }
    },
    components: {
      'header-top': HeaderTop,
      'shop-list': ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .homepage  //首页
        width 100%
        .homepage_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
                width 100%
                height 100%
                .swiper-wrapper
                    width 100%
                    height 100%
                    .swiper-slide
                        display flex
                        justify-content center
                        align-items flex-start
                        flex-wrap wrap
                        .link_to_food
                            width 25%
                            .food_container
                                display block
                                width 100%
                                text-align center
                                padding-bottom 10px
                                font-size 0
                                img
                                    display inline-block
                                    width 50px
                                    height 50px
                            span
                                display block
                                width 100%
                                text-align center
                                font-size 13px
                                color #666
                .swiper-pagination
                    >span.swiper-pagination-bullet-active
                        background #02a774
</style>
