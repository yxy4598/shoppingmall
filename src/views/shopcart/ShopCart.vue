<template>
  <div id="shop-cart">
    <nav-bar class="shop-cart-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'ShopCart',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .shop-cart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
