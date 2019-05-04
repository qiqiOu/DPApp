<template>
  <ul id="subscript">
    <li class="show" v-for="item ,index in items">
      <div class="show_infor">
        <!--<img :src="item.headpic" class="headpic" alt="头像">-->
        <img src="../../../../assets/imgs/1.jpeg" class="headpic" alt="头像">
        <span class="username">{{item.username}}</span>
        <span class="title">{{item.title}}</span>
      </div>
      <div class="show_pic">
        <!--<img :src="item.pics[0]">-->
        <img src="../../../../assets/imgs/1.jpeg">
        <div :class="{'picnum': item.pics.length > 1 ,'hidden': item.pics.length == 1}">
          共 {{item.pics.length}} 张图
          <i class="iconfont icondown"></i>
        </div>
      </div>
      <div class="show_interacct">
        <i :class="{'iconfont':true ,'iconxihuan_un':item.islike == 0,'iconxihuan':item.islike == 1}" @click="islike(item.islike,index)"></i>
        <i class="iconfont iconliuyan" @click="comment(index)"></i>
        <i class="iconfont iconzhuanfa"></i>
        <i :class="{'iconfont':true ,'iconshoucang_un':item.iscollect == 0,'iconshoucang':item.iscollect == 1}" @click="iscollect(item.iscollect,index)"></i>
        <div class="likenum">共{{item.likenum}}人喜欢</div>
        <div :class="{'comment': item.commentnum > 0 ,'hidden': item.commentnum == 0}">查看全部{{item.commentnum}}条评论</div>
        <input type="text" placeholder="留下你的精彩评论吧" class="commentsty"/>
      </div>
    </li>
    <li>
      <Comment v-show="isshowcomment" v-on:listenToChildEvent="closecomment" v-bind:data="index"></Comment>
    </li>
  </ul>
</template>

<script type="text/javascript">
   import Comment from '../../../../components/comment/comment'

    export default {
      name: "subscript",
      components:{Comment},
      data() {
        return {
          userid:localStorage.getItem('userid'),
          isshowcomment:false,
          index:-1,
          items:[
            { headpic:'../../../assets/imgs/1.jpeg',
              username:'1111',
              title:'第一组',
              islike:0,
              iscollect:0,
              pics:[
                '../../../assets/imgs/1.jpeg'
              ],
              likenum:1,
              commentnum:1
            },
            { headpic:'../../../assets/imgs/1.jpeg',
              username:'2222',
              title:'第二组',
              islike:1,
              iscollect:1,
              pics:[
                '../../../assets/imgs/1.jpeg',
                '../../../assets/imgs/1.jpeg'
              ],
              likenum:2,
              commentnum:2
            },{ headpic:'../../../assets/imgs/1.jpeg',
              username:'3333',
              title:'第三组',
              islike:1,
              iscollect:1,
              pics:[
                '../../../assets/imgs/1.jpeg',
                '../../../assets/imgs/1.jpeg',
                '../../../assets/imgs/1.jpeg'
              ],
              likenum:3,
              commentnum:3
            }
          ]
        }
      },
      methods:{
        islike(value,index){
          switch (value) {
            case 1:this.items[index].islike = 0;break;
            case 0:this.items[index].islike = 1;break;
          }
        },
        iscollect(value,index){
          switch (value) {
            case 1:this.items[index].iscollect = 0;break;
            case 0:this.items[index].iscollect = 1;break;
          }
        },
        comment(index){
           this.isshowcomment = true;
           this.index = index;
           document.querySelector('body').setAttribute('style', 'overflow:hidden');
          // document.querySelector('body').removeAttribute('style')
        },
        closecomment(isshowcomment){
          this.isshowcomment = isshowcomment;
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  #subscript
    width 100%
    .iconxihuan, .iconshoucang
      color $red
    .hidden
      display none
    .show_infor
      width 100%
      padding 0 5%
      height 60px
      font-size 15px
      border-bottom 1px solid #dddddd
      line-height 60px
      .headpic
        width 45px
        height 45px
        border-radius 50%
        float left
        margin-top 7px
      .username
        padding-left 20px
      .title
        float right
        padding-right 10%
    .show_pic
      img
        width 100%
        height auto
      .picnum
        width 100%
        text-align center
        padding 5px 0px
        font-size 12px
        .iconfont
          color $red
          font-size 13px
    .show_interacct
      padding-left 5%
      margin-top 5px
      word-spacing 10px
      font-size 12px
      .likenum
        padding 8px 0px
        color black
      .comment
        color gray
      .commentsty
        margin-top 5px
        padding 5px 10px
        background-color #f5f5f5
        width 90%
        border none
</style>
