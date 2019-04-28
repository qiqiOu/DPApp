<template>
  <div id="app">
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
      <router-view></router-view>
    </v-touch>

    <FooterGuide v-show="$route.meta.showFooter" ></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide"
  export default {
    name:'app',
    data(){
      return {}
    },
    components: {FooterGuide},
    methods:{
      swiperleft: function () {
        switch (this.$route.path) {
          case '/home/subscript': this.$router.push({'path':'/home/hot'});break;
          case '/home/hot': this.$router.push({'path':'/home/sort'});break;
          case '/home/sort': this.$router.push({'path':'/shop'});break;
          case '/shop': this.$router.push({'path':'/infor'});break;
          case '/infor': this.$router.push({'path':'/my'});break;
        }
      },
      swiperright: function () {
        switch (this.$route.path) {
          case '/home/hot': this.$router.push({'path':'/home/subscript'});break;
          case '/home/sort': this.$router.push({'path':'/home/hot'});break;
          case '/shop': this.$router.push({'path':'/home/hot'});break;
          case '/infor': this.$router.push({'path':'/shop'});break;
          case '/my': this.$router.push({'path':'/infor'});break;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    /*height 100%*/
    background #f5f5f5
    .wrapper
      width 100%
      min-height 100%
</style>
