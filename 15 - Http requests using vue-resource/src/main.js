import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// global http configurations
// for more: https://github.com/pagekit/vue-resource/blob/HEAD/docs/config.md
Vue.http.options.root = "https://vue-my-demo.firebaseio.com/";

// interceptors - will be in array
Vue.http.interceptors.push((request, next) => {
  // modify request
  console.log('Request:', request);

  // calling next will call the next interceptors
  next((response) => {
    // modify response
    console.log('Response:', response);
  })
});

new Vue({
  el: '#app',
  render: h => h(App)
})
