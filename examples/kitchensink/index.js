import Vue from 'vue';
import Vuex from 'vuex';
import FluroUI from '@/fluro-ui';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(FluroUI);

new Vue({
  el: '#app',
  store: new Vuex.Store(),
  fluroUISettings: new FluroUI(),
  render: createElement => createElement(App)
});
