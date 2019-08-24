import Vue from 'vue'
import App from './App.vue'

// global filter
Vue.filter('toLowerCase', function(value){
  return value.toLowerCase();
})


// global mixin
Vue.mixin({

  // this data is shared to read. Vuejs makes a copy of this data to the component
  // So, we can easily change the mixin data with in the component, 
  // which will not affect the other components
  data(){
    globalMixinData: 'Hello, im the boss mixin, available in all components';
  },
  created(){
    console.log('Global mixin');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
