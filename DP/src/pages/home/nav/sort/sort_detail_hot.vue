<template>
  <div>
      <ul>
        <li :key="index" @click="preview(index)" v-for="(res, index) in result" class="listy">
          <div style="position:relative;">
            <div class="worknum">{{res.nums}}</div>
            <img :src="res.worksrc" alt="" class="imgsty" />
          </div>
          <div class="detail">
            <img :src="res.headsrc" class="heahpic">
            <span class="detail_username">{{res.username}}</span>
            <span class="num" v-show="res.likenum != 0">{{res.likenum}}</span>
            <i :class="['iconfont', res.islike? 'iconxihuan' :'iconxihuan_un']" @click="clicklike(res)"></i>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        result:[
          {
            'worksrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'nums':11,
            'headsrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'username':'1111',
            'likenum':'1111',
            'islike':false
          },
          {
            'worksrc':'http://img1.xcarimg.com/bbs/1364/m_20130226182252682775.jpg',
            'nums':11,
            'headsrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'username':'1111',
            'likenum':'1111',
            'islike':true
          },
          {
            'worksrc':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
            'nums':22,
            'headsrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'username':'22222',
            'likenum':'2222',
            'islike':true
          },
          {
            'worksrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'nums':33,
            'headsrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'username':'33333',
            'likenum':'333',
            'islike':false
          },
          {
            'worksrc':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
            'nums':4,
            'headsrc':'http://img.qqzhi.com/upload/img_2_3421673420D1239130456_27.jpg',
            'username':'444',
            'likenum':'44',
            'islike':false
          },
        ]
      }
    },
    created() {
    },
    methods: {
      preview(index) {
        this.$imagePreview({
          images: this.images,
          index: index,
        })
      },
      clicklike(res){
        res.islike = !res.islike;
        if(res.islike)
          res.likenum++;
        else
          res.likenum--;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../../../node_modules/vue-image-swipe/dist/vue-image-swipe.css'
  @import "../../../../common/stylus/mixins.styl"
  ul
    margin: 0 auto;
    width: 100%;
    column-count: 2;
    column-width: 8px;
    column-gap: 8px;
  .listy
    margin-bottom: 8px;
    break-inside: avoid;
    .worknum
      width 25px
      height 25px
      border-radius 50%
      background rgba(0,0,0,0.5)
      font-size 12px
      line-height 25px
      color white
      text-align center
      position:absolute;
      right 8px
      top 8px
    .imgsty
      width 100%
      border-radius 5px
    .detail
      height 40px
      width 100%
      line-height 45px
      .heahpic
        width 32px
        height 32px
        margin-top 5px
        border-radius 50%
      .detail_username
        font-size 15px
        vertical-align top
      .iconxihuan_un,.iconxihuan
        font-size 20px
        float right
      .iconxihuan
        color $red
      .num
        float right
        font-size 13px
        margin-left 5px
</style>
