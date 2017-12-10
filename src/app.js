import Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'
import router from './router'
import createStore from './store'

window.Vue = Vue
Vue.use(Vuex)
Vue.config.productionTip = false

// const store = createStore()
// sync(store, router)

// new Vue({
//   store,
//   router,
//   ...App
// }).$mount('#app')

const createApp = () => {
  const store = createStore()
  sync(store, router)

  const app = new Vue({
    store,
    router,
    ...App
  })

  return { app, store, router }
}

export default createApp
