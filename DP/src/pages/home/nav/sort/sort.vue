<template>
    <div>
      <div class="sorts" v-for="(sort,index) in sorts">
          <div class="title">{{sort.name}}</div>
          <div class="lists" v-for="list in sort.lists">
            <div class="list">
              <img :src="list.pic" class="pic"/>
              <div class="list_name">{{list.name}}</div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "sort",
        data(){
          return {
            sorts:[
              {'name':'题材',
                'lists':
                  [
                    {'name':'人像','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'动物','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'纪实','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'美女','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'静物','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'风光','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'旅行','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'建筑','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'街拍','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'}
                  ]
              },
              {'name':'风格',
                'lists':
                  [
                    {'name':'创意','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'后期','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'微距','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'黑白','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'色彩','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'日系','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'情绪','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'小清新','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'极简','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'}
                  ]
              },
              {'name':'器材',
                'lists':
                  [
                    {'name':'手机','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'广角','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'佳能','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'胶片','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'尼康','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'富士','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'索尼','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'35mm','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'},
                    {'name':'50mm','pic':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1343015815,2335192405&fm=26&gp=0.jpg'}
                  ]
              }
            ]
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  .sorts
    width 90%
    margin-left 5%
    .title
      border-left 5px solid $red
      height 25px
      padding-left 10px
      line-height 25px
      margin 20px 0px
      color #999999
    .lists
      display inline-block
      width 31%
      margin 5px 1%
      .list
        width: 100%;
        height: 0px;
        padding-bottom: 100%;
        overflow:hidden;
        margin: 0;
        position:relative;
        .pic
          position:absolute;
          width: 100%;
          height: 100%;
        .list_name
          position:absolute;
          width 100%
          color #eeeeee
          font-size 15px
          bottom 0
          line-height 30px
          text-align center
          background rgba(0,0,0,0.3)
</style>
