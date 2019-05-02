<template>
  <div class="subscribe">
    <ul>
      <li class="listy" v-for="order in subscribe_order">
        <div class="ordertop">
          <span class="order_time">{{order.order_time}}</span>
          <span class="status">{{order.status == 0? '预约中':'预约成功'}}</span>
        </div>
        <div class="ordermiddle">
          <div class="evaluate_time">拍摄时间：{{order.evaluate_time}}</div>
          <div class="place">拍摄地点：{{order.place}}</div>
          <div class="type">拍摄类型：{{order.type}}</div>
        </div>
        <div class="orderbottom">
          <button class="cancel">取消预约</button>
          <span class="num">共{{order.num}}套   应付金额</span>
          <span class="fund">￥{{order.found}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "order_evaluate",
    data(){
      return{
        subscribe_order:[
          {'type':'宠物照','evaluate_time':'2019.04.07 11:00:00','num':'1','found':'1500.00','order_time':'2019-04-01','status':'0','place':'重庆市巴南区重庆理工大学'},
          {'type':'艺术照','evaluate_time':'2019.04.07 11:00:00','num':'1','found':'150.00','order_time':'2019-04-01','status':'1','place':'重庆市巴南区重庆理工大学'},
          {'type':'证件照','evaluate_time':'2019.04.07 11:00:00','num':'1','found':'1500.00','order_time':'2019-04-01','status':'0','place':'重庆市巴南区重庆理工大学'},
          {'type':'生活照','evaluate_time':'2019.04.07 11:00:00','num':'1','found':'1500.00','order_time':'2019-04-01','status':'1','place':'重庆市巴南区重庆理工大学'},
          {'type':'宝宝照','evaluate_time':'2019.04.07 11:00:00','num':'2','found':'1500.00','order_time':'2019-04-01','status':'1','place':'重庆市巴南区重庆理工大学'}
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
      .cancel
        border 1px solid lightgray
        padding 8px 10px
        background-color white
        color gray
        border-radius 20px
        position absolute
        left 5%
        margin-top 8px
      .fund
        color $red
</style>
