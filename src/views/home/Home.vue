<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>
    <li>liuxing</li>

  </div>
</template>

<script>
  import HomeSwiper from './childComs/HomeSwiper'
  import RecommendView from './childComs/RecommendView'
  import FeatureView from './childComs/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import {getHomeMultidata} from "network/home"

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    created() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
</style>
