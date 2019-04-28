<template>
  <div>
    <div class="sort_nav" id="sort_nav">
      <router-link  to="/sort/sort_detail/hot" class="sort" >热门</router-link>
      <router-link  to="/sort/sort_detail/new" class="sort">最新</router-link>
      <router-link  to="/sort/sort_detail/photographer" class="sort">摄影师</router-link>
    </div>
    <!-- 路由匹配到的组件将显示在这里 -->
    <router-view class="content"></router-view>
  </div>
</template>

<script>
    export default {
        name: "sortDetailNav",
        data() {
          return {

          }
        },
        methods:{

        },
        mounted: function () {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .sort_nav
    nav()
  .content
    width 90%
    padding 10px 5%
    min-height 150px
</style>
