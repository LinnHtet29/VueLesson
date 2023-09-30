import Vue from 'vue'
import App from './App.vue'
import Fruit from './Fruit.vue';
Vue.component('fruits', Fruit);

new Vue({
  el: '#app',
  render: h => h(App)
})
