import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

// register a plugin
Vue.use(VueRouter);

// create an instance
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // changes the scroll position

    // to a saved position
    if(savedPosition){
      return savedPosition;
    }
    // to a hash or id
    if(to.hash){
      return {selector: to.hash}
    }
    // to top
    return {x:0, y:0}
  }
});

router.beforeEach((to, from, next) => {
  console.log('1 >> route checks can be done globally before each route')
  next(); // continues the journey
})

new Vue({
  el: '#app',
  // specify to the main vue instance
  router,
  render: h => h(App)
})
