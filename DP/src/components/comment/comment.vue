<template>
    <div id="comment">
      <div class="content">
        <ul>
          <li>
            <div class="line"></div>
            共{{data}}条评论
            <i class="iconfont iconclose" @click="close"></i>
          </li>
          <li class="content_top">
            <img src="../../assets/imgs/1.jpeg" class="authorhead">
            <div class="userinfor">
              <div class="username">用户名（作者）</div>
              <div class="title">主题</div>
            </div>
            <div class="time">2019.04.21</div>
          </li>
          <li class="reviewer">
            <img src="../../assets/imgs/1.jpeg" class="authorhead">
            <div class="time">2019.04.21</div>
            <div class="userinfor">
              <div class="username">用户名11</div>
              <div class="reviewcontent">评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="write">
        <input type="text" placeholder="请留下你的精彩评论吧"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "comment",
        props:["data"],
        methods:{
          close(){
            document.querySelector('body').removeAttribute('style');
            this.$emit("listenToChildEvent",false);
            // this.isshowcomment = false;
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#comment
  width 100%
  height 100%
  position fixed
  bottom 0px
  background rgba(0, 0, 0, 0.5)
  z-index 999
  .content
    overflow-y auto
    width 100%
    max-height 50%
    position fixed
    bottom 0px
    border-top-right-radius 20px
    border-top-left-radius 20px
    background-color #fafafa
    ul
      margin-top -80px
      padding 10px 5%
      font-size 13px
      .content_top
        border-bottom 1px solid lightgray
        height 70px
        line-height 70px
      .reviewer
        min-height 70px
        width 100%
        margin-bottom 20px
        .time
          position absolute
          right 5%
          margin-right 0
          margin-top 12px
      .line
        display flex
        background-color #bbbbbb
        width 45px
        height 5px
        border-radius 5px
        margin 0px auto
        margin-bottom 8px
      .iconclose
        float right
      .authorhead
        float left
        width 40px
        height 40px
        border-radius 50%
        margin-top 15px
      .userinfor
        position absolute
        margin-top 15px
        margin-left 15%
        .username, .title
          height 20px
          line-height 20px
        .username
          color #999
        .reviewcontent
          max-width 85%
      .time
        float right
        margin-right -5%

  .write
    position absolute
    bottom 0px
    height 60px
    line-height 60px
    width 100%
    text-align center
    border-top 1px solid lightgray
    input
      border 1px solid lightgray
      width 80%
      border-radius 20px
      font-size 15px
      background #eeeeee
      padding 10px 15px
</style>
