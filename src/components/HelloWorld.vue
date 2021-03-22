<template>
  <div>{{ text }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  props: {
    msg: String
  },

  data () {
    return {
      text: 'Hi, Dima'
    }
  },

  created () {
    this.getUsers()
  },

  methods: {
    getUsers (): void {
      fetch('https://my-json-server.typicode.com/Vespand/crmm-tasks/users')
        .then(data => data.json())
        .then(data => console.log(data))
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
