<template>
    <section class="content">
        <div class="on">
            <section class="homepage">
                <!--首页头部-->
                <header-top title="武夷学院武夷学院武夷学院武夷学院武夷学院">
                    <span class="header_search" slot="left">
                        <i class="iconfont icon-sousuo"></i>
                    </span>
                    <span class="header_login" slot="right">
                        <span class="header_login_text">登录|注册</span>
                    </span>
                </header-top>
                <!--首页导航-->
                <nav class="homepage_nav">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/1.jpg">
                                    </div>
                                    <span>甜品饮品</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/2.jpg">
                                    </div>
                                    <span>商超便利</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/3.jpg">
                                    </div>
                                    <span>美食</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/4.jpg">
                                    </div>
                                    <span>简餐</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/5.jpg">
                                    </div>
                                    <span>新店特惠</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/6.jpg">
                                    </div>
                                    <span>准时达</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/7.jpg">
                                    </div>
                                    <span>预订早餐</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/8.jpg">
                                    </div>
                                    <span>土豪推荐</span>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/9.jpg">
                                    </div>
                                    <span>甜品饮品</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/10.jpg">
                                    </div>
                                    <span>商超便利</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/11.jpg">
                                    </div>
                                    <span>美食</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/12.jpg">
                                    </div>
                                    <span>简餐</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/13.jpg">
                                    </div>
                                    <span>新店特惠</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/14.jpg">
                                    </div>
                                    <span>准时达</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/1.jpg">
                                    </div>
                                    <span>预订早餐</span>
                                </a>
                                <a href="javascript:" class="link_to_food">
                                    <div class="food_container">
                                        <img src="./images/nav/2.jpg">
                                    </div>
                                    <span>土豪推荐</span>
                                </a>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
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
  export default {
    name: 'homePage',
    mounted () {
      new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    components: {
      'header-top': HeaderTop,
      'shop-list': ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
