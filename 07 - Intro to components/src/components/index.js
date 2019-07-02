import Vue from 'vue'
import Header from './atoms/Header.vue';
import Footer from './atoms/Footer.vue';
import Servers from './organisms/Servers.vue'

// All Global components
Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-servers', Servers);
