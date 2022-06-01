<template>
  <div class="sales-line">
    <div class="sales-line-inner">
      <vue-echarts :options="options"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesLine",
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    const axis = ['00:00', '08:00', '16:00', '24:00'];
    // 两个柱状图
    const data1 = ['151', '532', '901', '344'];
    const data2 = ['320', '1732', '501', '334'];
    const data3 = ['900', '800', '700', '600'];
    this.options = {
      title: {
        text: '分时访问&成交趋势图',
        textStyle: {
          color: '#fff'
        },
        left: 10,
        top: 10
      },
      tooltip: {},
      grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        // 计算grid时候自动加上label大小，不需要自己增加left值
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: axis,
        boundaryGap: false,
        axisLabel: {
          color: 'rgba(255,255,255,0.3)'
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,0.3)'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        axisLine: {
          show: false
        }
      },
      series: [
        //  配置三个平滑曲线图
        {
          name: '访问量',
          type: 'line',
          data: data1,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'rgb(0, 163, 233)'
          }
        },
        {
          name: '成交量',
          type: 'line',
          data: data2,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'yellow'
          }
        },
        {
          name: 'KPI',
          type: 'line',
          data: data3,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'red'
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.sales-line {
  position: absolute;
  top: 950px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 500px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-line-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}

</style>