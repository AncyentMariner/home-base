import Vue from 'vue'

Vue.component('functional', {
  functional: true,
  render (h) {
    console.log('thing')
    return h('div', 'hi')
  }
})
