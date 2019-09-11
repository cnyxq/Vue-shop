<template>
    <section class="order">
        <header-top title="订单列表"></header-top>
        <section class="order_no_login">
            <img src="../HomePage/images/order/person.png">
            <h3>登录后查看外卖订单</h3>
            <button>立即登陆</button>
        </section>
    </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    name: 'order',
    components: {
      'header-top': HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .order  //订单
        .header
            background-color #02a774
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            .header_title
                position absolute
                top 50%
                left 50%
                transform translate(-50%, -50%)
                width 30%
                color #fff
                font-size 22px
                text-align center
        width 100%
        .order_no_login
            padding-top 140px
            width 60%
            margin 0 auto
            text-align center
            >img
                display block
                width 100%
                height 30%
            >h3
                padding 10px 0
                font-size 17px
                color #6a6a6a
            >button
                display inline-block
                background #02a774
                font-size 14px
                color #fff
                border 0
                outline none
                border-radius 5px
                padding 10px 20px
</style>
