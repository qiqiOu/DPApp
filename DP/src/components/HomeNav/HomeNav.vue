<template>
  <div class="nav">
    <div id="main">
      <li><router-link  to="/subscript" >关注</router-link></li>
      <li><router-link  to="/hot" >热门</router-link></li>
      <li><router-link  to="/sort" >分类</router-link></li>
    </div>

    <!-- 路由匹配到的组件将显示在这里 -->
    <router-view class="content"></router-view>

  </div>
</template>

<script>

    export default {
      data() {
        return {
          transitionName: 'transitionLeft'
        }
      },
      methods: {

      },
      watch: {
        '$route' (to, from) {

        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

    #main
      width 100%
      height 30px
      line-height 40px
      padding-left 5%
      margin-top 50px
      font-size 15px
      position fixed
      border-bottom 1px solid #cccccc
      background-color #f5f5f5
      li
        height 100%
        margin-right 10px
        display inline-block
        .router-link-active
          color $red
          font-weight bolder
          font-size 18p
    .content
      padding-top 80px
      padding-bottom 80px
</style>
