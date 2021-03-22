<template>
  <header class="header">
    <h1
      class="title"
    >
      Рейтинг пользователей:
    </h1>
    <BaseSortButton />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseSortButton from './BaseSortButton'

export default Vue.extend({
  name: 'TheHeading',

  components: { BaseSortButton }
})
</script>

<style>

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
  }

</style>
