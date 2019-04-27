
<template>
  <div>
    <div :class="{ 'top1': isActive, 'top2': !isActive}" id="top">
      <span v-show="!isActive">{{sortname}}</span>
      <i class="iconfont iconreturn"></i>
      <i class="iconfont iconzhuanfa"></i>
    </div>
    <collapse>
      <div class="container" v-show="isActive" id="container">
        <img :src="coverImgUrl" class="bg"/>
      </div>
    </collapse>
    <div class="bottom">
      <div class="container_inner" style="height: 150px;width: 100%;background: white">
        <div class="name">#{{sortname}}</div>
        <div class="total">共 {{total}} 作品</div>
      </div>
      <v-touch @swipeleft="swiperleft" @swiperight="swiperright">
        <SortDetailNav></SortDetailNav>
      </v-touch>
    </div>
  </div>
</template>
<script>
  import collapse from "../../../../assets/js/collapse.js";
  import SortDetailNav from "../../../../components/sortDetailNav/sortDetailNav"
  export default {
    data() {
      return {
        isActive: true,
        isfirst1:true,
        isfirst2:false,
        sortname:'人像',
        total:110,
        coverImgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'
      };
    },
    components: {
      collapse,SortDetailNav
    },
    methods:{
      swipedown(){
        var container = document.getElementById('container');
        var distance = container.getBoundingClientRect().top;
        if(distance < -50){
          if(this.isfirst1 && !this.isfirst2){
            this.isfirst1 = false;
            this.isfirst2 = true;
            this.isActive = false;
          }
        } else{
          if(this.isfirst2 && !this.isfirst1) {
            this.isfirst2 = false;
            this.isfirst1 = true;
            this.isActive = true;
          }
        }
      },
      swiperleft: function () {
        switch (this.$route.path) {
          case '/sort/sort_detail/hot': this.$router.push({'path':'/sort/sort_detail/new'});break;
          case '/sort/sort_detail/new': this.$router.push({'path':'/sort/sort_detail/photographer'});break;
          case '/sort/sort_detail/photographer': this.$router.push({'path':'/sort/sort_detail/hot'});break;
        }
      },
      swiperright: function () {
        switch (this.$route.path) {
          case '/sort/sort_detail/new': this.$router.push({'path':'/sort/sort_detail/hot'});break;
          case '/sort/sort_detail/photographer': this.$router.push({'path':'/sort/sort_detail/new'});break;
          case '/sort/sort_detail/hot': this.$router.push({'path':'/sort/sort_detail/photographer'});break;
        }
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.swipedown)
      })
    },
    destroyed: function () {
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .top1,.top2
    height 50px
    line-height 50px
    position fixed
    border none
    width 90%
    padding-left 5%
    padding-right 5%
    z-index 9999
    text-align center
    background none
    color #333
    font-size 20px
    .iconreturn
      color #eeeeee
      float left
      font-size 35px
    .iconzhuanfa
      float right
      color #eeeeee
      font-size 25px
  .top2
    background white
    border-bottom 1px solid lightgray
    .iconreturn
      color #333
      float left
      font-size 35px
    .iconzhuanfa
      float right
      color #333
      font-size 25px
  .container
    width 100%
    max-height 500px
    .bg
      width 100%
  .bottom
    width 100%
    margin-bottom 10px
    background white
    .container_inner
      width 100%
      height 150px
      background white
      margin-top -1px
      .name
        font-size 28px
        padding-left 10%
        padding-top 20px
      .total
        padding-left 10%
        padding-top 20px
        font-size 13px
</style>
