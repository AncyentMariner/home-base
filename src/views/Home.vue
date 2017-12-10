<template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>{{ path }}</code> and save.
    </p>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'

export default {
  components: {
    Counter
  },

  data () {
    const path = './client'

    return {
      path
    }
  }
}
</script>
