import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// Registering a Global Component
Vue.component('app-home', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
