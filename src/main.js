import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SixteenClass from './components/SixteenClass'
import FifteenClass from './components/FifteenClass'
import SeventeenClass from './components/SeventeenClass'

Vue.use(VueRouter);
const routes = [
  {path:'/',component:SixteenClass},
  {path:'/fifteen',component:FifteenClass},
  {path:'/Seventeen/:id',component:SeventeenClass},
]
const router = new VueRouter({
  routes
});
Vue.config.productionTip = false
Vue.filter("Ucase",function(value){
  return value.toUpperCase();
})
Vue.filter("currencyConvertor",function(value){
  return value * 275;
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
