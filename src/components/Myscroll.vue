
<template>
  <div ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Myscroll",
  props: {
    probeType: {
       //有时候我们需要知道滚动的位置。
       //当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后:截流）派发scroll 事件；
       //当 probeType 为 2 的时候，会在屏幕滑动的过程中实时（不截流）的派发 scroll 事件；
       //当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum（回弹） 滚动动画运行过程中实时派发 scroll 事件。
       //如果没有设置该值，其默认值为 0，即不派发 scroll 事件
      type: Number,
      default: 1
    },
    click: {
      //click是否派发click事件，通常判断浏览器派发的click还是betterscroll派发的click，
      //可以用event._constructed判断，为true,则是betterscroll派发的
      type: Boolean,
      defalut: true
    },
    data: {
      //滚动的界面是否有了数据（这些数据多数是异步获取的）
      //根据这个当有数据的时候refresh,在watch中有相关逻辑
      type: Array,
      default: null
    },
    listenScroll: {
      //是否派发滚动位置
      type: Boolean,
      default: false
    },
    //实现上拉刷新
    pullup: {
        type: Boolean,
        default: false
    },
    //实现下拉刷新
    pulldown: {
      type: Boolean,
      default: false
    },
    //开始滚动的时候派发一个事件
    beforeScroll: {
        type: Boolean,
        default: false
    },
    //监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()  //初始化
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      //派发滚动位置
      if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
          //pos.y
          //往上滑动负数，往下滑动正数
          me.$emit('scroll', pos)
        })
      }
      //上拉刷新，滚动到底部派发一个事件
      if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
              if(this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                  this.$emit('scrllToEnd')
              }
          })
      }
      //是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchend', (pos) => {
          //下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }
      //开始滚动的时候派发一个事件
      //比如，搜索下拉框，滚动下拉框的时候，派发开始滚动事件，从而收起键盘
      if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
              this.$emit('beforeScroll')
          })
      }
    },
    //代理better-scroll的enable方法
    enable() {
      this.scroll && this.scroll.enable()
    },
    //代理better-scroll的disable方法
    disable() {
      this.scroll && this.scroll.disable()
    },
    //代理better-scroll的refresh方法
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    //代理better-scroll的scrollTo方法
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    //代理better-scroll的scrollToElement方法
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    //这里之所以要有一个 refreshDelay 的设置是考虑到
    //如果我们对列表操作用到了 transition-group 做动画效果，
    //那么 DOM 的渲染完毕时间就是在动画完成之后。参照add-song.vuec
    data() {
      //监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>

<style lang="less">
.wrapper{

}
</style>