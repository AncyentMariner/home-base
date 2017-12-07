import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// const store = new Vuex.Store({
//   state: {
//     coords: []
//   },
//   mutations: {
//     addCoords(state, payload) {
//       state.coords.push(payload)
//     },
//     emptyState() {
//       this.replaceState({ coords: [] })
//     }
//   }
// })

// Vue.use(VuexUndoRedo);

// methods: {
//   undoDraw() {
//     this.undo();
//     this.$refs.canvas.draw();
//   },
//   redoDraw() {
//     this.redo();
//     this.$refs.canvas.draw();
//   },
// }
