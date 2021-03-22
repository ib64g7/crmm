<template>
  <div class="container">
    <TheHeading />
    <TheMain />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeading from '../components/TheHeading'
import TheMain from '../components/TheMain'

export default Vue.extend({
  name: 'MainView',

  components: { TheHeading, TheMain }
})
</script>

<style scoped lang="scss">

  .container {
    margin: auto;
    position: relative;

    width: 100%;
    max-width: 584px;
  }

</style>
