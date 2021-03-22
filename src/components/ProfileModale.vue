<template>
  <div class="modal">
    <div class="container">
      <div class="modal__head head">
        <h2 class="head__title">
            Профиль пользователя:
        </h2>
        <svg
          @click="turnOffModalView"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-element"
        >
          <rect
            width="32"
            height="32"
            rx="16"
            fill="black"
            fill-opacity="0.07"
            class="svg-circle"
          />
          <path
            d="M16 17.4142L22.2929 23.7071L23.7071 22.2929L17.4142 16L23.7071 9.70712L22.2929 8.29291L16 14.5858L9.70706 8.29291L8.29285 9.70712L14.5858 16L8.29285 22.2929L9.70706 23.7071L16 17.4142Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="modal__main main">
        <img
          :src="imageSource"
          :class="'img' + number"
          class="img"
        />
        <aside class="main__aside">
          <div>Имя</div>
          <div>{{ name }}</div>
          <div>Баллы</div>
          <div>{{ rating }}</div>
          <div>Позиция в рейтинге</div>
          <div>{{ index }}</div>
        </aside>
      </div>

      <div class="description">
        <span>О себе</span>
        <span>{{ description }}</span>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProfileModale',

  props: {
    imageSource: {
      type: String,
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    rating: {
      type: Number,
      required: true
    },

    number: {
      type: Number,
      required: true
    }
  },

  methods: {
    turnOffModalView (): void {
      this.$store.commit('changeModalView', false)
    }
  }

})
</script>

<style scoped lang="scss">

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 478px;

    background: #fff;
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__main {
      margin-top: 29px;
      display: flex;
    }
  }

  .container {
    padding: 24.29px 24.29px 21px 29px;

    width: 100%;
    max-width: 420px;
  }

  .head {
    &__title {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 18px;
    }
  }

  .main {
    &__aside {
      margin-left: 37px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .img {
    width: 129px;
    height: 129px;
    border-radius: 50%;

    &0 {
      border: 4px solid #FDD835;
    }
    &1 {
      border: 4px solid #90A4AE;
    }
    &2 {
      border: 4px solid #795548;
    }
  }

  .description {
    margin-top: 17px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .svg-element {
    &:hover {
      .svg-circle {
        opacity: 1;
      }
    }
    cursor: pointer;
  }

  .svg-circle {
    transition-duration: 0.3s;
    opacity: 0;
  }

</style>
