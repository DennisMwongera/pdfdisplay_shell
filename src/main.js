import Vue from 'vue'
import App from './App.vue'
import VueSilentbox from 'vue-silentbox'

Vue.use(VueSilentbox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
