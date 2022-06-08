<template>
  <div class="home" v-if="!loading">
    <div class="echarts-wrapper">
      <!-- 画布背景 -->
      <div class="datav-wrapper"/>
      <top-header/>
      <sales-bar/>
      <sales-line/>
      <sales-pie/>
      <sales-map/>
      <sales-sun/>
      <sales-radar/>
    </div>
  </div>
  <div class="home" v-else>
    <div class="loading-wrapper">
      {{ loadingText }}
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import SalesBar from "@/components/SalesBar";
import SalesLine from "@/components/SalesLine";
import SalesPie from "@/components/SalesPie";
import SalesMap from "@/components/SalesMap";
import SalesSun from "@/components/SalesSun";
import SalesRadar from "@/components/SalesRadar";
import {getMobileData} from '@/api';

export default {
  name: "Home",
  components: {SalesRadar, SalesSun, SalesMap, SalesPie, SalesLine, SalesBar, TopHeader},
  data() {
    return {
      loading: true,
      loadingText: '加载中',
      data: null
    }
  },
  mounted() {
    this.task && clearInterval(this.task);
    this.task = setInterval(() => {
      // 制作动画效果:...变化
      if (this.loadingText === '加载中...') {
        this.loadingText = '加载中';
      } else {
        this.loadingText += '.';
      }
    }, 300);
    getMobileData().then(data => {
      this.loading = false;
      this.task && clearInterval(this.task);
      this.data = data;
    }).catch(() => {
      this.loading = false;
      this.data = null;
    });
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

  .loading-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #fff;
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