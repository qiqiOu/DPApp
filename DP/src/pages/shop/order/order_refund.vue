<template>
  <div class="subscribe">
    <ul>
      <li class="listy" v-for="order in subscribe_order">
        <div class="ordertop">
          <span class="refund_time">{{order.refund_time}}</span>
          <span class="status">{{order.status == 0 ? '退款失败' : (order.status == 1 ? '退款成功' : '退款中')}}</span>
        </div>
        <div class="ordermiddle">
          <div class="evaluate_time">拍摄时间：{{order.evaluate_time}}</div>
          <div class="place">拍摄地点：{{order.place}}</div>
          <div class="type">拍摄类型：{{order.type}}</div>
        </div>
        <div class="orderbottom">
          <span class="num">共{{order.num}}套 </span>
          <span class="fund">￥{{order.found}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "order_refund",
    data(){
      return{
        subscribe_order:[
          {'type':'宠物照','evaluate_time':'2019.04.07 11:00:00','num':'1','found':'1500.00','refund_time':'2019-04-01','status':'0','place':'重庆市巴南区重庆理工大学'},
          {'type':'艺术照','evaluate_time':'2019.04.07 11:00:00','num':'1','found':'150.00','refund_time':'2019-04-01','status':'1','place':'重庆市巴南区重庆理工大学'},
          {'type':'证件照','evaluate_time':'2019.04.07 11:00:00','num':'1','found':'1500.00','refund_time':'2019-04-01','status':'2','place':'重庆市巴南区重庆理工大学'},
          {'type':'生活照','evaluate_time':'2019.04.07 11:00:00','num':'1','found':'1500.00','refund_time':'2019-04-01','status':'1','place':'重庆市巴南区重庆理工大学'},
          {'type':'宝宝照','evaluate_time':'2019.04.07 11:00:00','num':'2','found':'1500.00','refund_time':'2019-04-01','status':'1','place':'重庆市巴南区重庆理工大学'}
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .listy
    width 100%
    background white
    color #333333
    font-size 14px
    margin-bottom 10px
    .ordertop
      line-height 40px
      padding 0px 5%
      border-bottom 1px solid #eeeeee
      display flex
      justify-content space-between
    .ordermiddle
      padding 0px 5%
      border-bottom 1px solid #eeeeee
      .evaluate_time,.place,.type
        font-size 15px
        line-height 30px
        max-width 70%
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
    .orderbottom
      padding 0 5%
      line-height 50px
      text-align right
      .fund
        color $red
</style>
