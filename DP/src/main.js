/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
import VideoPlayer from 'vue-video-player'

Vue.use(VideoPlayer)

VueTouch.config.swipe = {
  threshold: 10 //手指左右滑动距离
}

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
