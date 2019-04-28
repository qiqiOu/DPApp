<template>
  <div class="shop" >
    <Left v-if="show" :parentToChild="show" @sendValueToParent = "getValueFromChild"></Left>
    <div class="top">
      <i class="iconfont iconcaidanlan" @click="show = !show"></i>
      <div class="searchcontent">
        <input type="search" class="searchsty" placeholder="搜一搜"/>
        <i class="iconfont iconsousuo"></i>
      </div>
    </div>
    <div class="recommend">
      <span class="recommend_name" v-for="name in hotsearch">{{name}}</span>
    </div>
    <swiper class="swiper" :options="swiperOption"  ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="src in imgArray">
        <img :src="src" height="200px" width="100%"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="goods">
      <div class="goods_title">推荐</div>
      <ul>
        <li :key="index" @click="preview(index)" v-for="(res, index) in result" class="listy">
          <img :src="res.worksrc" alt="" class="imgsty" />
          <div class="detail">
            <span class="detail_title">{{res.title}}</span>

            <i :class="['iconfont', res.iscollect? 'iconshoucang' :'iconshoucang_un']" @click="clickcollect(res)"></i>
            <i :class="['iconfont', res.islike? 'iconxihuan' :'iconxihuan_un']" @click="clicklike(res)"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Left from  '../../components/left/left'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "shop",
    data(){
      return {
        show:false,
        hotsearch:['情侣照','婚纱照','艺术照'],
        imgArray:[
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3807427310,283445384&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3807427310,283445384&fm=26&gp=0.jpg'
        ],
        result:[
          {
            'worksrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'title':'主题1',
            'iscollect':false,
            'islike':false
          },
          {
            'worksrc':'http://img1.xcarimg.com/bbs/1364/m_20130226182252682775.jpg',
            'title':'主题1',
            'iscollect':true,
            'islike':true
          },
          {
            'worksrc':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
            'title':'主题2',
            'iscollect':false,
            'islike':true
          },
          {
            'worksrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'title':'主题3',
            'iscollect':true,
            'islike':false
          },
          {
            'worksrc':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
            'title':'主题4',
            'iscollect':false,
            'islike':false
          },
        ],
        swiperOption:{
          //显示分页
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          //切换模式  横屏或者竖屏
          // direction : 'vertical',
          //设置自动播放速度
          autoplay: {
            disableOnInteraction: false,
            delay:4000
          },
          //开启无限循环
          loop:true,
          //设置点击箭头
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          //设置同屏显示的数量，默认为1，使用auto是随意的意思。
          slidesPerView:1,
          //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
          mousewheel:true ,
          //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
          // freeMode:true
        }
      }
    },
    components:{Left,swiper, swiperSlide},
    methods:{
      getValueFromChild(value){
        this.show = value;
      },
      preview(index) {
        this.$imagePreview({
          images: this.images,
          index: index,
        })
      },
      clicklike(res){
        res.islike = !res.islike;
      }
      ,
      clickcollect(res){
        res.iscollect = !res.iscollect;
      }
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(3, 1000, false)
      console.log('mounted');
      //鼠标覆盖停止自动切换
      this.swiper.el.onmouseover = function () {
        this.swiper.autoplay.stop();
        console.log('stop');
      }
      //鼠标离开开始自动切换
      this.swiper.el.onmouseout = function () {
        this.swiper.autoplay.start();
        console.log('start');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../node_modules/swiper/dist/css/swiper.css'
  @import "../../common/stylus/mixins.styl"
  .shop
    width 100%
    .top
      width 90%
      margin-left 5%
      height 50px
      line-height 50px
      .iconcaidanlan
        font-size 25px
        width 10%
        color gray
        float left
      .searchcontent
        width 90%
        .searchsty
          position absolute
          width 80%
          padding 10px 5%
          font-size 15px
          margin-top 5px
          border 1px solid lightgray
          border-radius 20px
        .iconsousuo
          position absolute
          right 10%
          float right
          font-size 25px
    .recommend
      width 90%
      margin-left 5%
      line-height 20px
      font-size 12px
      text-align center
      color white
      .recommend_name
        margin 2px 5px
        padding 2px 8px
        display inline-block
        background gray
        border-radius 15px
    .swiper
      width 90%
      margin-left 5%
      height 200px
      swiper-slide
        width 100%
        height 200px
    .goods
      margin-bottom 40px
      width 90%
      margin-left 5%
      .goods_title
        margin 10px 0px
        border-left 5px solid $red
        height 30px
        padding-left 10px
        line-height 30px
        color #333333line-height
        font-size 15px
      ul
        margin: 0 auto;
        width: 100%;
        column-count: 2;
        column-width: 8px;
        column-gap: 8px;
    .listy
      margin-bottom: 8px;
      break-inside: avoid;
      .imgsty
        width 100%
        border-radius 5px
      .detail
        height 40px
        width 100%
        line-height 45px
        .detail_title
          font-size 15px
          vertical-align top
        .iconxihuan_un,.iconxihuan,.iconshoucang,.iconshoucang_un
          font-size 15px
          margin-left 10px
          float right
        .iconxihuan,.iconshoucang
          color $red
  .slide-fade-enter-active,.slide-fade-leave-active
    transition all 0.3s linear
    transform translate3d(0, 0, 0)
  .slide-fade-enter, .slide-fade-leave-to
    transform translate3d(-100%, 0, 0)
</style>
