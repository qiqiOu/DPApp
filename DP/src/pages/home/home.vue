<template>
  <div id="home">
    <i class="iconfont iconsousuo"></i>
    <input type="search" placeholder="搜索" class="searchsty"/>
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
    touch-action pan-y!important
    .searchsty
      width 90%
      margin-top 10px
      margin-left 5%
      padding 10px 10px 10px 50px
      border-radius 20px
      font-size 15px
    .iconsousuo
      position absolute
      margin-left 10%
      margin-top 21px


</style>
