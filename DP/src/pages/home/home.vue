<template>
  <div id="home">
    <div class="home_top">
      <input type="search" placeholder="搜索" class="searchsty"/>
      <i class="iconfont iconsousuo"></i>
    </div>
    <HomeNav></HomeNav>
  </div>
</template>

<script>
  import HomeNav from '../../components/HomeNav/HomeNav'

  export default {
    name: 'home',
    data () {
      return {}
    },
    components: {HomeNav}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home
    margin 0
    padding 0
    width 100%
    .home_top
      position fixed
      height 60px
      width 100%
      background-color #f5f5f5
      .searchsty
        width 90%
        margin-top 10px
        margin-left 5%
        padding 10px 10px 10px 50px
        border-radius 20px
        font-size 15px
        position fixed
      .iconsousuo
        margin-left 10%
        margin-top 21px
        position fixed

</style>
