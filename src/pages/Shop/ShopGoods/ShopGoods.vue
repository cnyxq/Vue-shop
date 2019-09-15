<template>
    <div>
        <div class="goods">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <li class="menu-item current" v-for="(item,index) in shopGoods" :key="index">
                        <span class="text bottom-border-1px">
                        <img class="icon" :src="item.icon" v-if="item.icon">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodsWrapper">
                <ul>
                    <li class="food-list-hook" v-for="(item,index) in shopGoods" :key="index"><h1 class="title">{{item.name}}</h1>
                        <ul>
                            <li class="food-item bottom-border-1px" v-for="(i,index) in item.foods" :key="index">
                                <div class="icon">
                                    <img width="57" height="57" :src="i.icon">
                                </div>
                                <div class="content">
                                    <h2 class="name">{{i.name}}</h2>
                                    <p class="desc">{{i.description}}</p>
                                    <div class="extra">
                                        <span class="count">月售{{i.sellCount}}份</span>
                                        <span>好评率{{i.rating}}%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">￥{{i.price}}</span>
                                    </div>
                                    <div class="cartcontrol-wrapper"> CartControl</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'shopGoods',
    data () {
      return {
        tops: [], // 右侧每个食品分区的坐标
        scrollY: 0 // 右侧滚动实时坐标
      }
    },
    computed: {
      ...mapState(['shopGoods'])
    },
    mounted() {
      this.$store.dispatch('getShopGoods')
    },
    watch: {
      shopGoods() {
        this.$nextTick(() => {
          this.initScroll()
          this.initTops()
        })
      }
    },
    methods: {
      // 初始化滚动条
      initScroll() {
        new BScroll('.menu-wrapper')
        let foodScroll = new BScroll('.foods-wrapper',{
          probeType: 3
        })
        foodScroll.on('scroll',(event) => {
          this.scrollY = Math.floor(event.y)
        })
      },
      // 初始化食品坐标
      initTops() {
        let tops = []
        let top = 0
        tops.push(top)
        const lis = document.getElementsByClassName('food-list-hook')
        Array.prototype.slice.call(lis).forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })
        this.tops = tops
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../../common/stylus/mixins.styl'
    .goods
        display: flex
        position: absolute
        top: 195px
        bottom: 46px
        width: 100%
        background: #fff;
        overflow: hidden
        .menu-wrapper
            flex: 0 0 80px
            width: 80px
            background: #f3f5f7
            .menu-item
                display: table
                height: 54px
                width: 56px
                padding: 0 12px
                line-height: 14px
                &.current
                    position: relative
                    z-index: 10
                    margin-top: -1px
                    background: #fff
                    color: $green
                    font-weight: 700
                    .text
                        border-none()
                .icon
                    display: inline-block
                    vertical-align: top
                    width: 12px
                    height: 12px
                    margin-right: 2px
                    background-size: 12px 12px
                    background-repeat: no-repeat
                .text
                    display: table-cell
                    width: 56px
                    vertical-align: middle
                    bottom-border-1px(rgba(7, 17, 27, 0.1))
                    font-size: 12px
        .foods-wrapper
            flex: 1
            .title
                padding-left: 14px
                height: 26px
                line-height: 26px
                border-left: 2px solid #d9dde1
                font-size: 12px
                color: rgb(147, 153, 159)
                background: #f3f5f7
            .food-item
                display: flex
                margin: 18px
                padding-bottom: 18px
                bottom-border-1px(rgba(7, 17, 27, 0.1))
                &:last-child
                    border-none()
                    margin-bottom: 0
                .icon
                    flex: 0 0 57px
                    margin-right: 10px
                .content
                    flex: 1
                    .name
                        margin: 2px 0 8px 0
                        height: 14px
                        line-height: 14px
                        font-size: 14px
                        color: rgb(7, 17, 27)
                    .desc, .extra
                        line-height: 10px
                        font-size: 10px
                        color: rgb(147, 153, 159)
                    .desc
                        line-height: 12px
                        margin-bottom: 8px
                    .extra
                        span
                            float: left
                        .count
                            margin-right: 12px
                    .price
                        height 25px
                        font-weight: 700px
                        line-height: 24px
                        span
                            float: left
                        .now
                            margin-right: 8px
                            font-size: 14px
                            color: rgb(240, 20, 20)
                        .old
                            text-decoration: line-through
                            font-size: 10px
                            color: rgb(147, 153, 159)
                    .cartcontrol-wrapper
                        position: absolute
                        right: 0
                        bottom: 18px
</style>
