<template>
  <div class="background"  @click="isPlay">
    <i class="iconfont iconreturn"></i>
    <video :src="src" preload="auto"
           loop="loop"
           autoplay="autoplay"
           controls="controls"
           width="100%"
           id="video"></video>
    <div class="detail">
      <button class="btn" v-for="mark in marks"># {{mark}} ></button>
      <div class="username">@摄影师 {{name}}</div>
      <div class="word">{{words}}</div>
    </div>
    <div class="videosty cover">
    </div>
    <ul class="right">
         <li>
           <img src="../../../assets/imgs/add.png" class="add"></img>
           <img  src="../../../assets/imgs/1.jpeg" class="headpic"/>
         </li>
        <li>
          <i class="iconfont iconxihuan"></i><div class="describe">21</div>
        </li>
        <li>
          <i class="iconfont iconxiaoxi"></i><div class="describe">31</div>
        </li>
        <li><i class="iconfont iconxiazai1"></i><div class="describe">45</div></li>
        <li>
          <img src="../../../assets/imgs/music.png" class="music"/>
        </li>
      </ul>

  </div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'
  import Slider from "vue-concise-slider/src/components/slider";

  export default {
    data () {
      return {
        src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        marks:['摄影'],
        name:'用户名',
        words:'我有好多小伙伴，小熊、小提琴、小卡车'
      }
    },
    components: {Slider, videoPlayer},
    methods: {
      isPlay(){
        let video = document.getElementById('video');
        console.log(video.paused);
        if(video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../../node_modules/video.js/dist/video-js.css'
  @import '../../../../node_modules/vue-video-player/src/custom-theme.css'
  @import "../../../common/stylus/mixins.styl"
  .background
    background-color #000000
    width 100%
    height 100%
    position absolute
    display flex
    justify-items center
    .iconreturn
      position fixed
      top 0
      width 90%
      color #eeeeee
      font-size 25px
      line-height 40px
      padding 5px 5%
    .detail
      position absolute
      bottom 20%
      padding-left 5%
      width 50%
      color #eeeeee
      .btn
        border 1px solid #eeeeee
        padding 2px 5px
        font-size 13px
        color #eeeeee
        border-radius 5px
        background none
        margin-right 10px
        margin-bottom 10px
      .username
        font-size 15px
        margin-bottom 10px
      .word
        font-size 15px
    .right
      position absolute
      bottom 5%
      right 5%
      display table-cell
      text-align center
      color #ffffff
      z-index 999
      .iconfont
        font-size 38px
        color #ffffff
      .headpic,.music
        width 40px
        height 40px
        border-radius 50%
        margin-bottom 30px
        margin-top 5px
      @keyframes changDeg
        0%{transform: rotate(0deg); }
        100%{transform: rotate(360deg);}
      .music
        animation changDeg 2s linear 0.2s infinite
      .add
        position absolute
        right -5%
        top 5%
        color $red
        border-radius 50%
        width 25px
        height 25px
      .describe
        margin-top 5px
        margin-bottom 15px
        font-size 15px
  video::-webkit-media-controls-play-button,
  video::-webkit-media-controls-mute-button,
  video::-webkit-media-controls-volume-slider,
  video::-webkit-media-controls-fullscreen-button,
  video::-webkit-media-controls-current-time-display,
  video::-webkit-media-controls-time-remaining-display
    display none
  video::-webkit-media-controls-timeline
    width 100%
    position absolute
    margin 0
    padding 0
</style>
