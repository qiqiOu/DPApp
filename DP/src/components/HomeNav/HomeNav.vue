<template>
  <div class="nav">
    <ul id="main">
      <li><router-link  to="/subscript" >关注</router-link></li>
      <li><router-link  to="/hot" >热门</router-link></li>
      <li><router-link  to="/sort" >分类</router-link></li>
    </ul>

    <!-- 路由匹配到的组件将显示在这里 -->
    <router-view  class="slide"></router-view>
  </div>
</template>

<script>

    export default {
      data() {
        return {
          touch: {}, // 保存着起始位置x1和变化的位置x2
          touchStartTime: 0, // touch开始
          touchEndTime: 0, // touch结束时间
          currentDistance: 0, // 上一个touch事件完成后，已滑动距离。实际在这个设计里，因为我们手指离开后， 页面不会停留在中间，不是滑过去切换路由，就是滑回去恢复原样。所以这个变量并没有什么卵用，但是如果要*即停即走*，这个变量不可少。
          totalDiff: 0 // 总滑动距离
        }
      },
      methods: {
        touchStart(ev) {
          let touch = ev.changedTouches[0]
          this.touch.x1 = touch.pageX // 本文中所有this指向vue组件实例
          // 这里是driver组件或是passenger
        },
        translate(el, x, y, options) {
          const defaultOptions = {
            useTransfrom: true,
            transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
            transitionDuration: '0s'
          }
          for (let option in options) {
            defaultOptions[option] = options[option]
          }
          if (defaultOptions.useTransfrom) {
            el.style.transform = `translate3d(${x}px,${y}px,0)`
            el.style.transitionProperty = 'transform'
            el.style.transitionTimingFunction = defaultOptions.transitionTimingFunction
            el.style.transitionDuration = defaultOptions.transitionDuration
          } else {
            el.style.left = x
            el.style.top = y
          }
        },
        touchMove(ev) {
          let touch = ev.changedTouches[0]
          this.touch.x2 = touch.pageX
          let diff = this.touch.x2 - this.touch.x1 // 差值，表示手指移动的距离
          this.totalDiff = diff + this.currentDistance // 总差值，表示手指移动的距离，正表示右滑，负左滑
          if (this.totalDiff < 0) { // driver组件是右滑，所以totalDiff不能小于0
            this.totalDiff = 0
          } else if (this.totalDiff > this.maxMoveDistance) { // 这里maxMoveDistance为屏幕宽度
            this.totalDiff = this.maxMoveDistance
          }
          let el = ev.currentTarget
          translate(el, this.totalDiff, 0) // 对组件进行滑动
          translate(this.leftEl, this.totalDiff, 0) // leftEl后面再做解释
        }
      },
      watch: {
        $route (to,from){
          // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
          console.log(to);
          console.log(from);
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  #main
    width 100%
    padding-top 10px
    padding-left 5%
    font-size 15px
    bottom-border-1px(#cccccc)
    li
      display inline-block
      line-height 40px
      .router-link-active
        border-bottom 5px solid $red
        font-size 18px
        padding 5px
  .slide
    position absolute
</style>
