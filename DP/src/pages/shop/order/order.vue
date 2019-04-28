<template>
    <div class="order">
      <div class="top">
        <i class="iconfont iconreturn" />
        订 单
      </div>
      <div class="search">
        <i class="iconfont iconsousuo"></i>
        <input type="search" placeholder="搜索订单" class="searchsty" />
      </div>
      <v-touch @swipeleft="swiperleft" @swiperight="swiperright">
        <order-nav></order-nav>
      </v-touch>
    </div>
</template>

<script>
  import OrderNav from "../../../components/orderNav/orderNav"
  export default {
    name: "order",
    components:{OrderNav},
    methods:{
      swiperleft(){
        switch (this.$route.path) {
          case '/order/order_all': this.$router.push({'path':'/order/order_subscribe'});break;
          case '/order/order_subscribe': this.$router.push({'path':'/order/order_over'});break;
          case '/order/order_over': this.$router.push({'path':'/order/order_evaluate'});break;
          case '/order/order_evaluate': this.$router.push({'path':'/order/order_refund'});break;
        }
      },
      swiperright(){
        switch (this.$route.path) {
          case '/order/order_refund': this.$router.push({'path':'/order/order_evaluate'});break;
          case '/order/order_evaluate': this.$router.push({'path':'/order/order_over'});break;
          case '/order/order_over': this.$router.push({'path':'/order/order_subscribe'});break;
          case '/order/order_subscribe': this.$router.push({'path':'/order/order_all'});break;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .order
    width 100%
    .top
      width 90%
      padding 0 5%
      height 50px
      line-height 50px
      text-align center
      font-size 20px
      background white
      border-bottom 1px solid lightgray
      .iconreturn
        position absolute
        left 5%
        font-size 30px
    .search
      position relative
      .searchsty
        width 90%
        margin-left 5%
        padding 10px 40px
        border-radius 20px
        border 1px solid lightgray
        color gray
        font-size 15px
      .iconsousuo
        position absolute
        right 10%
        font-size 25px
        margin-top 8px
</style>
