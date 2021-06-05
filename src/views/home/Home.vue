<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl" class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="goods[currentClick].list"></goods-list>
    </scroll>
    <!-- 通过v-on中的属性.native来监听原生组件的点击事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './childComs/HomeSwiper'
  import RecommendView from './childComs/RecommendView'
  import FeatureView from './childComs/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata, getHomeGoods} from "network/home"
  import {debounce} from "common/utils"

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentClick: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
    },
    mounted() {
      // 防抖动操作
      const refresh = debounce(this.$refs.scroll.refresh, 100)
      // console.log(refresh);
      this.$bus.$on('itemImageLoad', () => {
        refresh();
      })

      
    },
    destroyed() {

    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY();
    },
    methods: {
      /**
       * 事件的监听方法
       */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentClick = 'pop';
            break;
          case 1:
            this.currentClick = 'new';
            break;
          case 2:
            this.currentClick = 'sell'
            break;
        }
        // console.log(index);
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
        // console.log("jianting");
      },
      contentScroll(position) {
        // console.log((-position.y) > 1000);
        this.isShowBackTop = (-position.y) > 1000;
        // console.log(position);

        //2.决定tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop;
      },
      loadMore() {
        // console.log('上拉加载');
        this.getHomeGoods(this.currentClick);

        this.$refs.scroll.finishPullUp();
      },
      swiperImageLoad() {
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      /**
       * 网络请求的方法 
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        // console.log(this.goods);
        getHomeGoods(type, page).then(res => {
          // console.log(res);

          // for (let n of res.data.data.list){
          //   this.goods[type].list.push(n)
          // }

          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    /* position: relative; */
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1; */
  }

  .tab-control {
    position: relative;

    z-index: 1;
  }

  .content {
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>
