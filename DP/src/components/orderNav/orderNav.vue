<template>
  <div>
    <div class="order_nav" id="order_nav">
      <router-link  to="/order/order_all" class="sort" >全部</router-link>
      <router-link  to="/order/order_subscribe" class="sort">预约</router-link>
      <router-link  to="/order/order_over" class="sort">完成</router-link>
      <router-link  to="/order/order_evaluate" class="sort">待评价</router-link>
      <router-link  to="/order/order_refund" class="sort">退款</router-link>
    </div>
    <!-- 路由匹配到的组件将显示在这里 -->
    <router-view class="content"></router-view>
  </div>
</template>

<script>
    export default {
        name: "orderNav"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .order_nav
    nav()
  .content
    width 100%
    padding 10px 0px
</style>
