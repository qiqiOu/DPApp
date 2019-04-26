<template>
  <div id="contain">
    <div class="background" id="sss">
      <div class="top">
          <i class="iconfont iconclose"></i>
          <img src="../../../../assets/imgs/1.jpeg" class="headpic">
          <span class="username">用户名</span>
          <button class="care">+关注</button>
        </div>
      <div class="swiper-container"  id="scroll">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(str,index) in  sliderLists">
              <a href="#"><img :src="str" @click="slide"/></a>
              <span style="position: absolute;bottom: 0;color: #eeeeee;font-size: 13px">{{index+1+'/' + sliderLists.length}}</span>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-white swiper-pagination-white swiper-pagination-clickable swiper-pagination-bullet"></div>
        </div>
      <ul class="bottom">
          <li>
            <div class="num">222</div>
            <i class="iconfont iconxihuan_un"></i><div class="describe">喜欢</div>
          </li>
          <li>
            <div class="num">222</div><i class="iconfont iconliuyan"></i><div class="describe">评论</div>
          </li>
          <li><i class="iconfont iconzhuanfa"></i><div class="describe">转发</div></li>
          <li>
            <div class="num">222</div>
            <i class="iconfont iconshoucang_un"></i><div class="describe">收藏</div>
          </li>
          <li><i class="iconfont iconnext"></i><div class="describe">下一组</div></li>
          <li><i class="iconfont iconxiazai"></i><div class="describe">下载</div></li>
        </ul>
    </div>
    <div class="down" id="ddd">
      <div class="mark">
        <button v-for="mark of marks" class="marksty">{{mark}}</button>
      </div>
      <div class="picinfor">
        <table>
          <tr><th colspan="2">照片信息</th></tr>
          <tr class="detail" v-for="picinfor of picinfors">
            <td>{{picinfor.name}}</td>
            <td>{{picinfor.detail}}</td>
          </tr>
        </table>
      </div>
      <div class="otherwork">
           <div>同作者作品</div>
            <ul class="otherworksty" v-for="otherwork in otherworks">
              <li class="image">
                 <img :src="otherwork" />
              </li>
            </ul>
            <div v-show="otherworks.length==9" class="more">查看更多 ></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "subscript_detail",
        methods:{
        },
        data() {
          return {
            picinfors:[
              {name:'器材',detail:'Canoon EOS 5D Mark II'},
              {name:'参数',detail:'1/125s,f/2.8,ISO160,130.0mm'},
              {name:'时间',detail:'2019-03-24 16:44:39'}
            ],
            otherworks:[
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'
            ],
            marks:['猫','宠物','可爱','可爱','可爱','可爱','可爱','可爱','可爱'],
            sliderLists:[
              'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
              'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3807427310,283445384&fm=26&gp=0.jpg',
              'http://pic27.nipic.com/20130320/11882181_165033306159_2.jpg'
            ]
          }
        },
        mounted() {
          setTimeout(()=>{
            var mySwiper = new Swiper('.swiper-container',{
              direction:'horizontal',
              loop:false,
              pagination:{
                el:'.swiper-pagination',
              }
            })
          },100);
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../../../node_modules/swiper/dist/css/swiper.css"
@import "../../../../common/stylus/mixins.styl"
.background
  background-color #222222
  width 100%
  height 200%
  position absolute
  display flex
  align-items Center
  top -50%
  .swiper-container
    width 100%
    height auto
    .swiper-wrapper
      width 100%
      height 100%
      display: flex;
      align-items:Center;
      .swiper-slide
        position relative
        background-position center
        background-size cover
        width 100%
        height 100%
      img
        border-top 20px solid black
        border-bottom 20px solid black
        width 100%
        /*height 100%*/
      .swiper-container-bullets
        width 100%
        height 8px
        display inline-block
    .swiper-pagination-bullet
      display none
  .top
    position fixed
    top 0
    width 90%
    height 40px
    line-height 40px
    padding 5px 5%
    background rgba(0,0,0,0.2)
    z-index 2
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
    li
      display inline-block
      .num
        position absolute
        background-color black
        padding 2px 5px
        border-radius 5px
        color #eeeeee
        font-size 12px
        margin-left 8%
        margin-top -5px
      .describe
        color #999999
        margin-top 5px
        font-size 12px
      .iconfont
        font-size 25px
        color #eeeeee
        padding 10px
.down
  /*background-color crimson*/
  position absolute
  background-color #222222
  /*height 60%*/
  top 100%
  z-index 1
  width 100%
  .mark
    width 90%
    padding 5px 5%
    .marksty
      border 1px solid #eeeeee
      padding 3px 10px
      background-color rgba(0,0,0,0)
      border-radius 15px
      margin 5px 5px
      color lightgray
      font-size 12px
  .picinfor
    width 90%
    padding 0 5%
    font-size 15px
    margin-bottom 10px
    tr
      line-height 30px
      color lightgray
      text-align left
      td
        color #999999
        padding-right 20px


  .otherwork
    width 90%
    padding 10px 5%
    color lightgray
    font-size 15px
    .otherworksty
      .image
       width: 31%;
       height: 0;
       padding-bottom: 30%;
       position: relative
       float left
       margin-right 5px
       margin-top 5px
      img
       width: 100%;
       height: 100%;
       position: absolute;

  .more
    width 100%
    text-align center
    line-height 40px
    font-size 13px
    margin-bottom 50px


</style>
