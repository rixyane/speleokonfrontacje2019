import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/main.css'

const VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo, {
  container: "body",
  duration: 400,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
