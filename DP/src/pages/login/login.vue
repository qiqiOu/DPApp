<template>
  <div class="login">
    <span class="desc">登录后更精彩</span>
    <div>
      <form>
        <input type="number" v-model.trim="loginData.tel" name="tel" placeholder="      请输入手机号" class="inputsty"/>
        <input type="password" v-model.trim="loginData.password" name="pwd" placeholder="      请输入密码" class="inputsty"/>
        <input type="button" value="登 录" class="loginsty" @click="doLogin"/>
      </form>
      <div class="registersty" @click="goto('/register')">注册</div>
    </div>
  </div>
</template>

<script>
  import utils from "../../components/utils/utils"
  export default {
    name: "login",
    data(){
      return{
        loginData:{
          tel:"",
          password:""
        }
      }
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      doLogin(){
        let success=(response)=>{
          console.log(response.data.msg);
        }
        utils.axiosMethod({
          method:"POST",
          url:"/user/login/",
          data:this.loginData,
          callback:success
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login
    width 100%
    height 100%
    position fixed
    background-position center
    background-size auto
    background-image url("../../assets/imgs/login_bg.png")
    .desc
      font-size 32px
      font-weight bolder
      color #fff
      margin-left 5%
      line-height 100px
    form
      margin-top 30%
      .inputsty
        width 70%
        color #eeeeee
        margin-left 10%
        margin-bottom 20px
        background none
        padding 10px 5%
        border-bottom 1px solid #999
        font-size 15px
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
