<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">

body {
  // 补上下方的背景图
  height: 100%;
  background-image: url("//www.youbaobao.xyz/datav-res/datav/datav-mobile-bg2.jpg");
  background-size: 100%;
}

#app {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  // 避免移动端滚动卡
  -webkit-overflow-scrolling: touch;
}

</style>
