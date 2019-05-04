<template>
  <div class="login">
    <span class="desc">登录后更精彩</span>
    <div>
      <form>
        <input type="number" v-model.trim="loginData.tel"  @focus="inputtel" @blur="notinputtel" name="tel" placeholder="      请输入手机号" class="inputsty"/>
        <div class="tip" v-show="!islegal">{{islegal? '':'请输入正确的手机号码！'}}</div>
        <input type="password" v-model.trim="loginData.password" name="pwd" placeholder="      请输入密码" class="inputsty"/>
        <input type="button" value="登 录" class="loginsty" @click="doLogin" :disabled="!islegal || loginData.tel.length ==0 || loginData.password.length == 0"/>
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
        },
        islegal:true,
      }
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      doLogin(){
        let success=(response)=>{
          console.log(response.data);
          if(response.data.code == 0){
            this.$dialog.alert('登录成功！',{ okText: '确定'})
              .then(() => {
                localStorage.setItem(response.data.obj,'userid');
                this.goto('/home');
              })
          }else if(response.data.code == 1){
            this.$dialog.alert('账号或密码错误，请重新输入！',{ okText: '确定'});
          }else{
            this.$dialog.alert('请检查网络连接！',{ okText: '确定'});
            // options = {
            //   okText: '确定',  // 本地化确认按钮文字提示内容
            //   cancelText: '取消',  //本地化关闭按钮文字提示内容
            // }
          }
        }
        utils.axiosMethod({
          method:"POST",
          url:"/user/login/",
          data:this.loginData,
          callback:success
        })
      },
      inputtel(){
        this.islegal = true;
      },
      notinputtel() {
        if (this.loginData.tel.length == 11) {
          this.islegal = true;
        } else {
          this.islegal = false;
        }
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
      .tip
        color red
        font-size 13px
        margin-left 15%
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
