<template>
  <div class="home">
    <div class="echarts-wrapper">
      <vue-echarts :options="options"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
  font-size: 32px;
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