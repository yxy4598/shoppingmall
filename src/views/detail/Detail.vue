<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import {getDetail} from "network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        iid: null,
        topImages: []
      }
    },
    created() {
      this.iid = this.$route.params.iid;

      //取出iid的详情数据
      getDetail(this.iid).then(res => {
        console.log(res);
        this.topImages = res.data.result.itemInfo.topImages;
      })
    }
  }
</script>

<style scoped>

</style>
