<!--  -->
<template>
  <div>
    <ShopHeader />
    <div class="tab">
      <div class="tab-item">
        <router-link to='/shop/goods'>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/shop/ratings'>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/shop/info'>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <ShopCart />
  </div>
</template>

<script>
import ShopHeader from '@/components/ShopHeader/ShopHeader'
import ShopCart from '@/components/ShopCart/ShopCart'
export default {
// import引入的组件需要注入到对象中才能使用
  components: {
    ShopHeader,
    ShopCart
  },
  data () {
  // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.$store.dispatch('getShopInfo')
  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
