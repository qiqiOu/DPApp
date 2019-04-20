<template>
  <div class="login">
    <span class="desc">登录后更精彩</span>
    <div>
      <form>
        <input type="text" name="tel" placeholder="      请输入手机号" class="inputsty"/>
        <input type="password" name="pwd" placeholder="      请输入密码" class="inputsty"/>
        <input type="submit" value="登 录" class="loginsty"/>
      </form>
      <div class="registersty" @click="goto('/register')">注册</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login
    width 100%
    height 100%
    background-position center
    background-size auto
    background-image url("../../assets/imgs/login_bg.png")
    center()
    .desc
      font-size 32px
      font-weight bolder
      color #fff
      position absolute
      left 5%
      top 8%
    form
      .inputsty
        width 80%
        margin-left 10%
        margin-bottom 5px
        background rgba(0,0,0,0)
        padding 10px 0px
        border-bottom 1px solid #999
        font-size 20px
      .loginsty
        width 80%
        font-size 22px
        color #333333
        font-weight bolder
        margin-left 10%
        margin-top 20px
        border-radius 20px
        padding 5px 10px
    .registersty
      position absolute
      right 0px
      margin-top 20px
      margin-right 12%
      color #999
      font-size 15px

</style>
