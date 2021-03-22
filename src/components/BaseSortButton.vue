<template>
  <svg
    @click="sortList"
    width="35"
    height="34"
    viewBox="0 0 35 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="svg-element"
  >
    <rect
      x="0.740234"
      width="34.2598"
      height="34"
      rx="8"
      fill="black"
      fill-opacity="0.07"
      class="rect-active"
    />
    <rect
      x="1.24023"
      y="0.5"
      width="33.2598"
      height="33"
      rx="7.5"
      stroke="#2C3E50"
      stroke-opacity="0.67"
    />
    <line
      x1="9"
      y1="12"
      :x2="9 + firstLine.width"
      y2="12"
      stroke="black"
      stroke-width="2"
    />
    <line
      x1="9"
      y1="17"
      :x2="9 + secondLine.width"
      y2="17"
      stroke="black"
      stroke-width="2"
    />
    <line
      x1="9"
      y1="22"
      :x2="9 + thirdLine.width"
      y2="22"
      stroke="black"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseSortButton',

  data () {
    return {
      firstLine: {
        width: 19
      },
      secondLine: {
        width: 12
      },
      thirdLine: {
        width: 6
      }
    }
  },

  computed: {
    mode (): string {
      return this.$store.state.mode
    }
  },

  methods: {
    changeMode (mode: string): void {
      this.$store.commit('changeMode', mode)
      this.changeLines(mode)
    },

    sortList (): void {
      this.mode === 'up'
        ? this.changeMode('low')
        : this.changeMode('up')
    },

    changeLines (mode: string): void {
      let firstCounter: number = 0
      let secondCounter: number = 0
      let thirdCounter: number = 0
      if (mode === 'up') {
        firstCounter = 12, secondCounter = 6, thirdCounter = 19
        const timer = setInterval(() => {
          if (thirdCounter < 12) {
            clearInterval(timer)
            return
          }
          firstCounter += 1
          secondCounter += 1
          thirdCounter -= 1
          this.setWidthLines(firstCounter, secondCounter, thirdCounter)
        }, 50)
      } else {
        firstCounter = 19, secondCounter = 6, thirdCounter = 12
        const timer = setInterval(() => {
          if (firstCounter < 12) {
            clearInterval(timer)
            return
          }
          firstCounter -= 1
          secondCounter += 1
          thirdCounter += 1
          this.setWidthLines(firstCounter, secondCounter, thirdCounter)
        }, 50)
      }
    },

    setWidthLines (firstCounter: number, secondCounter: number, thirdCounter: number): void {
      this.firstLine.width = firstCounter
      this.secondLine.width = secondCounter
      this.thirdLine.width = thirdCounter
    },
  }
})
</script>

<style scoped lang="scss">

  .sortButton {
    width: 30px;
    height: 30px;
    border: 2px solid black;
  }

  .svg-element {
    &:hover {
      .rect-active {
        opacity: 1;
      }
    }
    cursor: pointer;
  }

  .rect-active {
    opacity: 0;
    transition-duration: 0.3s;
  }

</style>
