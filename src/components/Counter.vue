<template>
  <div class="counter-wrapper">
    <div class="counter">
      {{ count }}
    </div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '../store/types'

export default {
  computed: {
    ...mapState(['count'])
  },

  methods: {
    increment () {
      this.$store.commit(types.INCREMENT)
    },
    decrement () {
      this.$store.commit(types.DECREMENT)
    },
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>
