<template>
  <div class="home">
    <div class="echarts-wrapper">
      <!-- 画布背景 -->
      <div class="datav-wrapper"/>
      <top-header/>
      <sales-bar/>
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import SalesBar from "@/components/SalesBar";

export default {
  name: "Home",
  components: {SalesBar, TopHeader},
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    this.options = {
      title: {
        text: '入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衣服', '裤子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;

  .datav-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1336px;
    z-index: 1;
    background-image: url("//www.youbaobao.xyz/datav-res/datav/datav-mobile-bg.jpg");
    background-size: 100% 100%;
  }

}

.echarts-wrapper {
  width: 100%;
  height: 500px;
}

.echarts {
  width: 100%;
  height: 100%;
}
</style>