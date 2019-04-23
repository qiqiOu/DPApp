<template>
  <div>
    <div class="background" >
      <div class="top">
        <i class="iconfont iconclose"></i>
        <img src="../../../assets/imgs/1.jpeg" class="headpic">
        <span class="username">用户名</span>
        <button class="care">+关注</button>
      </div>
      <div class="videosty">
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions" @click="isPlay">
        </video-player>
        <div style="height: 100%;width: 100%;background: crimson"></div>
      </div>
    </div>
    <!--<ul class="bottom">-->
        <!--&lt;!&ndash;<li>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="num">222</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<i class="iconfont iconxihuan_un"></i><div class="describe">喜欢</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="num">222</div><i class="iconfont iconliuyan"></i><div class="describe">评论</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li><i class="iconfont iconzhuanfa"></i><div class="describe">转发</div></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="num">222</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<i class="iconfont iconshoucang_un"></i><div class="describe">收藏</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li><i class="iconfont iconnext"></i><div class="describe">下一组</div></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li><i class="iconfont iconxiazai"></i><div class="describe">下载</div></li>&ndash;&gt;-->
    <!--</ul>-->
  </div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'

  export default {
    props: {
      videoUrl: String,
      state: Boolean
    },
    data () {
      return {
        play:true,
        // videoUrl:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        playerOptions: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          // src: this.videoUrl// 你的m3u8地址（必填）
          src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
        }],
        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg', // 你的封面地址
         width: document.documentElement.clientWidth,
         notSupportedMessage: '此视频暂无法播放，请稍后再试',// 允许覆盖Video.js无法播放媒体源时显示的默认信息。
         controlBar: {
           timeDivider: true,
           durationDisplay: true,
           remainingTimeDisplay: false,
           fullscreenToggle: true  //全屏按钮
         }
        }
      }
    },
    watch: {
      //更改视频源 videoUrl从弹出框组件传值
      videoUrl: function (val) {
        if (val !== '') {
          this.$refs.videoPlayer.player.src(val)
        }
      },
      //弹出框关闭后暂停 否则一直在播放 state从弹出框组件传值
      state: function (val) {
        if (val) {
          this.$refs.videoPlayer.player.pause()
        }
      }
    },
    components: {videoPlayer},
    methods: {
      isPlay(){
        if(this.play){
          this.$refs.videoPlayer.player.pause();
          this.play = false;
        }
        else{
          this.$refs.videoPlayer.player.play();
          this.play = true;
        }
        console(this.play);
      }
    },
    computed: {
      player () {
        return this.$refs.videoPlayer.player
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../../node_modules/video.js/dist/video-js.css'
  @import '../../../../node_modules/vue-video-player/src/custom-theme.css'
  @import "../../../common/stylus/mixins.styl"
  .background
    background-color #222222
    width 100%
    height 100%
    position absolute
    .vjs-control-bar
      display none
    .videosty
      margin-top 55%
    .video-js .vjs-big-play-button
      border none
      background rgba(0,0,0,0)
    .vjs-icon-placeholder::before
      font-size: 70px;
      opacity: 0.3;
    .top
      position fixed
      top 0
      width 90%
      height 40px
      line-height 40px
      padding 5px 5%
      background rgba(0,0,0,0.2)
      .iconclose
        color white
        font-size 20px
        float left
      .headpic
        width 30px
        height 30px
        border-radius 50%
        margin-left 10%
        float left
        margin-top 5px
      .username
        color #eeeeee
        font-size 13px
        margin-left 5%
      .care
        background-color $red
        border none
        color #eeeeee
        font-size 12px
        margin-left 2%
        padding 5px 15px
        border-radius 10px
    .bottom
      position fixed
      bottom 0px
      width 90%
      height auto
      padding 20px 5%
      background rgba(0,0,0,1)
      display table-cell
      text-align center
      z-index 2
</style>
