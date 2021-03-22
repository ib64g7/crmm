<template>
  <div class="card">
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
        fill="black"
      />
    </svg>
    <span class="card__rating">{{ rating }}</span>
  </div>
</template>

<script>
export default {
  name: 'UserCardRating',

  props: {
    rating: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

  .card {
    display: flex;
    justify-content: start;
    align-items: center;

    // width: 50px;
    // height: 24px;
    &__rating {
      margin-left: 7px;

      width: 21px;
      height: 18px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 18px;
    }
  }

</style>
