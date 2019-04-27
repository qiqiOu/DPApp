<template>
    <div>
      <ul class="ulsty">
        <li class="li_sty" v-for="(res,index) in result">
          <img :src="res.headpic" class="headpic"/>
          <div class="middle">
            <div class="username">{{res.username}}</div>
            <div class="infor">{{res.infor}}</div>
          </div>
          <button :class="[res.iscare? 'nocare':'addcare']" @click="res.iscare = !res.iscare" id="index">{{res.iscare? '已':'+'}}关注</button>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "sort_detail_photographer",
        data(){
          return {
            result:[
              {
                'headpic':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
                'username':'111',
                'infor':'1111111111111111111111111111',
                'iscare':false
              },
              {
                'headpic':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
                'username':'222',
                'infor':'222222222222222222222',
                'iscare':false
              },
              {
                'headpic':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
                'username':'333',
                'infor':'33333333333333333333333333',
                'iscare':true
              },
              {
                'headpic':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
                'username':'111',
                'infor':'1111111111111111111111111111',
                'iscare':false
              },
              {
                'headpic':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
                'username':'222',
                'infor':'222222222222222222222',
                'iscare':false
              },
              {
                'headpic':'http://pic13.nipic.com/20110426/2531994_142446085000_2.jpg',
                'username':'333',
                'infor':'33333333333333333333333333',
                'iscare':true
              }
            ]
          }
        },
        methods:{

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  .ulsty
    width 100%
    column-count 1
    .li_sty
      width 100%
      height 60px
      margin-bottom 25px
      .headpic
        width 50px
        height 50px
        border-radius 50%
        margin-top 5px
      .middle
        display inline-block
        vertical-align top
        margin-top 13px
        margin-left 5px
        max-width 40%
        white-space nowrap
        .username
          color black
          margin-bottom 10px
          text-overflow ellipsis
          overflow hidden
        .infor
          color gray
          font-size 15px
          text-overflow ellipsis
          overflow hidden
      .addcare,.nocare
        float right
        border none
        padding 8px 20px
        background $red
        margin-top 15px
        color white
        font-size 13px
        border-radius 20px
      .nocare
        border 1px solid gray
        background none
        padding 7px 19px
        color gray
</style>
