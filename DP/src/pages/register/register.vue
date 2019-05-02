<template>
  <div class="main">
    <i class="iconfont iconreturn"></i>
    <div class="register">
      <form>
        <div class="titlesty">注 册</div>
        <input type="text" name="tel" @focus="inputtel" v-model.trim="registerData.tel" placeholder="      请输入手机号" class="inputsty"/>
        <div class="tip" v-show="!islegal || isregister">{{islegal?(isregister?'该号码已注册，请登录！':''):'请输入正确的手机号码！'}}</div>
        <input type="password" name="pwd" v-model.trim="registerData.password" placeholder="      请输入密码" class="inputsty"/>
        <input type="password" name="confirmpwd" v-model.trim="confirmpwd" placeholder="      确认密码" class="inputsty"/>
        <div class="tip" v-show="confirmpwd != '' && confirmpwd != registerData.password">两次密码不一致，请重新输入！</div>
        <input type="button" value="注 册" class="registersty" @click="register"/>
      </form>
    </div>
  </div>
</template>

<script>
  import utils from "../../components/utils/utils"
  export default {
    name: "register",
    data(){
      return{
        registerData:{
          tel:'',
          password:''
        },
        confirmpwd:'',
        isregister:false,
        islegal:true,
      }
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      register(){
        let success=(response)=>{
          if(response.data.code == 2){//已注册
            this.isregister = true;
          }else if(response.data.code == 1){//失败
            console.log(response.data.msg);
          }else if(response.data.code == 0){//成功
            console.log(response.data.msg);
          }
        }
        utils.axiosMethod({
          method:"POST",
          url:"/user/register/",
          data:this.registerData,
          callback:success
        })
      },
      inputtel(){
        this.isregister = false;
        this.islegal = true;
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
    position fixed
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
          width 70%
          margin-left 10%
          margin-bottom 5px
          background none
          padding 10px 5%
          border-bottom 1px solid #999
          font-size 15px
          color #eeeeee
        .tip
          color red
          font-size 13px
          margin-left 15%
          margin-top 5px
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
