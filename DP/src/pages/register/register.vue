<template>
  <div class="main">
    <i class="iconfont iconreturn"></i>
    <div class="register">
      <form>
        <div class="titlesty">注 册</div>
        <input type="text" name="tel" placeholder="      请输入手机号" class="inputsty"/>
        <input type="password" name="pwd" placeholder="      请输入密码" class="inputsty"/>
        <input type="password" name="confirmpwd" placeholder="      确认密码" class="inputsty"/>
        <input type="submit" value="注 册" class="registersty"/>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .main
    width 100%
    height 100%
    background-position center
    background-size auto
    background-image url("../../assets/imgs/login_bg.png")
    .iconreturn
      color #eee
      font-size 30px
      center()
    .register
      display flex
      height 100%
      justify-content center
      align-items center
      form
        .titlesty
          text-align center
          margin-bottom 50px
          font-size 32px
          font-weight bolder
          color #fff
        .inputsty
          width 80%
          margin-left 10%
          margin-bottom 5px
          background rgba(0,0,0,0)
          padding 10px 0px
          border-bottom 1px solid #999
          font-size 20px
        .registersty
          width 80%
          font-size 22px
          color #333333
          font-weight bolder
          margin-left 10%
          margin-top 50px
          border-radius 20px
          padding 5px 10px

</style>
