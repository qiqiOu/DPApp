<template>
  <div class="left" v-show="parentToChild">
    <transition name="slide-fade">
      <div class="left_slide">
        <i class="iconfont iconcaidanlan" @click="closeleft"></i>
        <div class="more">更多</div>
        <ul class="list">
          <li>
            <i class="iconfont iconcaogaoxiang"></i>
            <span>我的草稿</span>
          </li>
          <li>
            <i class="iconfont icongouwu1"></i>
            <span>收藏约拍</span>
          </li>
          <li>
            <i class="iconfont iconorder"></i>
            <span>订单</span>
          </li>
          <li>
            <i class="iconfont iconpingjia"></i>
            <span>评价</span>
          </li>
          <li>
            <i class="iconfont iconshoucang_un"></i>
            <span>关注摄影师</span>
          </li>
          <li>
            <i class="iconfont iconzuji"></i>
            <span>浏览足迹</span>
          </li>
          <li>
            <i class="iconfont iconhtmal5icon31"></i>
            <span>帮助与客服</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
        name: "left",
        props: ['parentToChild'],
        data () {
          return {
          }
        },
        methods:{
          closeleft(){
            this.parentToChild = !this.parentToChild;
            this.$emit('sendValueToParent',this.parentToChild);
          }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left
    width 100%
    position fixed
    height 100%
    z-index 9999999
    background rgba(0,0,0,0.5)
    .left_slide
      width 160px
      height 100%
      background #eeeeee
      z-index 99999999
      padding-right 20px
      padding-left 20px
      .iconcaidanlan
        font-size 25px
        color gray
        float right
        margin-top 10px
      .more
        padding-top 60px
        width 100%
        text-align center
        font-size 25px
      .list
        width 100%
        margin-top 40px
        font-size 15px
        color #333333
        li
          line-height 50px
          margin-left 25px
        .iconfont
          font-size 22px
          color #bbbbbb

</style>
