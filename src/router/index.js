import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'

const Async = () => import('../views/Async')
const thing = () => import('../components/thing')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/async', component: Async },
    { path: '/', component: thing }
  ]
})
