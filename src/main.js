import Vue from 'vue';
import App from './App.vue';
import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import './plugins/element.js';

new Vue({
  el: '#app',
  render: h => h(App),
});
