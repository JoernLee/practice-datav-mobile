<template>
  <div class="sales-bar">
    <div class="sales-bar-inner">
      <vue-echarts :options="options"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesBar",
  props:{
    data:Object
  },
  data() {
    return {
      options: {}
    }
  },
  watch: {
    data() {
      this.update();
    }
  },
  methods: {
    update() {
      if (this?.data?.salesBar) {
        const {axis, data1, data2} = this.data.salesBar;
        this.options = {
          title: {
            text: '今日销售额： 253,089.10元',
            textStyle: {
              color: '#fff'
            },
            top: 10
          },
          tooltip: {
            // tooltip直接展示坐标轴信息并且交互带有阴影
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '10%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }

          },
          yAxis: {
            type: 'category',
            data: axis,
            axisLabel: {
              color: '#fff'
            }
          },
          series: [
            {
              name: '平台流量',
              type: 'bar',
              data: data1
            },
            {
              name: '外部流量',
              type: 'bar',
              data: data2,
              itemStyle: {
                color: 'rgb(0, 140, 217)'
              }
            }
          ]
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">
.sales-bar {
  position: absolute;
  top: 300px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 650px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-bar-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}

</style>