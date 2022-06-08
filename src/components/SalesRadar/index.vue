<template>
  <div class="sales-radar">
    <div class="sales-radar-inner">
      <vue-echarts :options="options"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesRadar",
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    this.options = {
      radar: {
        name: {},
        // 指定雷达指标
        indicator: [
          {name: '订单量', max: 6500},
          {name: '骑手量', max: 16000},
          {name: '访问量', max: 30000},
          {name: '客服', max: 38000},
          {name: '配送', max: 52000},
          {name: '热度', max: 25000},
        ]
      },
      series: [{
        name: '运营指标',
        type: 'radar',
        data: [{
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: '预期'
        },{
          value: [5000, 14000, 26000, 33000, 45000, 17000],
          name: '实际'
        }]
      }]
    }
  }
}
</script>

<style scoped lang="scss">

.sales-radar {
  position: relative;
  top: 3250px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 800px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-radar-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}

</style>