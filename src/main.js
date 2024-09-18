import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter("Ucase",function(value){
  return value.toUpperCase();
})
Vue.filter("currencyConvertor",function(value){
  return value * 275;
})
new Vue({
  render: h => h(App),
}).$mount('#app')
