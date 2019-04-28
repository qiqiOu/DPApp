/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
import VideoPlayer from 'vue-video-player'
import VueImageSwipe from 'vue-image-swipe'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VideoPlayer)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueImageSwipe)
Vue.use(VueAwesomeSwiper)

VueTouch.config.swipe = {
  threshold: 10 //手指左右滑动距离
}

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
