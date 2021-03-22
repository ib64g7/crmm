<template>
  <div
    id="app"
    :class="{ active: isActive }"
    class="deactive">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  computed: {
    isActive (): boolean {
      return this.$store.state.modalShow
    }
  }
})
</script>

<style lang="scss">

  $colorText: #2C3E50;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $colorText;
  }

  body {
    padding: 0;
    margin: 0;
  }

  .deactive {
    background: #FAFAFA;
    transition-duration: 0.3s;
  }

  .active {
    background: #00000033;
    transition-duration: 0.3s;
  }

</style>
