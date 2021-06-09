<template>
  <div class="profile-content">
    <div>
      <img src="~assets/img/profile/profile.png" alt="">
    </div>
    <div class="profile-text">
      期望薪资：150~300
    </div>
    <div class="profile-text">
      <a href="https://billowcloud.gitee.io/">博客地址: https://billowcloud.gitee.io/</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileContent'
  }
</script>

<style scoped>
  .profile-content img{
    width: 100%;
  }
  .profile-text {
    line-height: 30px;
    color: var(--color-high-text);
    font-size: 20px;
  }
  .profile-text a{
    color: var(--color-high-text);
  }
</style>
