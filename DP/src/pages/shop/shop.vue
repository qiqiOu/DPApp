<template>
  <div class="shop">
    <div class="left" v-show="show">
      <transition name="slide-fade">
        <div class="left_slide" v-if="show">
          <i class="iconfont iconcaidanlan" @click="show = !show"></i>
        </div>
      </transition>
    </div>
    <div class="top">
      <i class="iconfont iconcaidanlan" @click="show = !show"></i>
      <!--<input type="search" class="searchsty" placeholder="搜索"/>-->
    </div>

  </div>
</template>

<script>
  export default {
    name: "shop",
    data(){
      return {
        show:false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shop
    width 100%
    .top
      width 100%
      padding 0px 5%
      height 50px
      line-height 50px
      .iconcaidanlan
        font-size 25px
        width 10%
        color gray
        margin-top 10px
      .searchsty
        padding 10px 20px
        font-size 15px
        border 1px solid lightgray
        width 89%
        border-radius 20px

    .left
      width 100%
      position absolute
      height 100%
      z-index 9999999
      background rgba(0,0,0,0.5)
      .left_slide
        width 160px
        height 100%
        background #eeeeee
        padding 20px
        .iconcaidanlan
          font-size 25px
          color gray
          float right
  .slide-fade-enter-active,.slide-fade-leave-active
    transition all 0.3s linear
    transform translate3d(0, 0, 0)
  .slide-fade-enter, .slide-fade-leave-to
    transform translate3d(-100%, 0, 0)
</style>
