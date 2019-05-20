import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wxTitle from 'vue-wechat-title'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

// 按需引入部分组件
// import { Cell, Checklist } from 'minu-ui';
// Vue.component(Cell.name, Cell);
// Vue.component(Checklist.name, Checklist);
Vue.config.productionTip = false
Vue.use(wxTitle)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
