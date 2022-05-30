import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import './styles/reset.css'
import ECharts from 'echarts';
import VueECharts from 'vue-echarts';

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.prototype.$echarts = ECharts;

Vue.component('vue-echarts', VueECharts);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
