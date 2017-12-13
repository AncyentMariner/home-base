<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>{{ path }}</code> and save.
    </p>
    
    <thing></thing>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import Thing from '../components/thing'

export default {
  components: {
    Counter,
    Thing
  },

  data () {
    const path = './client'

    return {
      path
    }
  }
}
</script>
