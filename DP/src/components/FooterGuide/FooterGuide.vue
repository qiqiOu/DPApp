<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont iconicon-home"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/shop')" :class="{on: isCurrent('/shop')}">
      <span class="item_icon">
      <i class="iconfont icongouwu"></i>
      </span>
      <span>约拍</span>
    </div>
    <div class="guide_item" @click="goto('/publish')" :class="{on: isCurrent('/publish')}">
      <span class="item_icon">
      <i class="iconfont iconfabu-"></i>
      </span>
    </div>
    <div class="guide_item" @click="goto('/infor')" :class="{on: isCurrent('/infor')}">
      <span class="item_icon">
      <i class="iconfont iconxiaoxi1"></i>
      </span>
      <span>消息</span>
    </div>
    <div class="guide_item" @click="goto('/my')" :class="{on: isCurrent('/my')}">
      <span class="item_icon">
      <i class="iconfont iconMy"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        if((this.$route.path === '/subscript' || this.$route.path === '/hot' || this.$route.path === '/sort') && path === '/home')
          return true
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color $red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
         font-size 22px
</style>
