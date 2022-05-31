import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import ECharts from 'echarts';
import VueECharts from 'vue-echarts';
// 要改到引入vue-echarts之后，这个时候才能覆盖掉.echarts样式
import './styles/reset.css'


Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.prototype.$echarts = ECharts;

Vue.component('vue-echarts', VueECharts);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
