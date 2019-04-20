<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide"
  export default {
    name:'app',
    data(){
      return {}
    },
    components: {FooterGuide}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    padding 0
    margin 0
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
