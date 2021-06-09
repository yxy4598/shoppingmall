<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的主页</div>
    </nav-bar>
    <scroll :pull-up-load="true">
      <profile-content></profile-content>
    </scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import ProfileContent from './childComps/ProfileContent'

  export default {
    name: 'Profile',
    components: {
      NavBar,
      Scroll,
      ProfileContent
    }
  }
</script>

<style scoped>
  .profile-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
