<template>
  <div class="news__card">
    <img v-if="data.image" :src="data.image" class="news__card-img" />
    <div class="news__card-content">
      <div class="news__card-date">
        <span class="news__card-date-day">{{ dateObj.day }}</span>
        <span>
          <div>{{ dateObj.month }}</div>
          <div>{{ dateObj.year }}</div>
        </span>
      </div>
      <a href="#" class="news__card-title">{{ data.name }}</a>
      <div class="news__card-text">{{ data.previewText }}</div>
      <a :href="data.link" class="link-dark news__card-link">Новости</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})

const dateObj = computed(() => {
  const value = new Date(props.data.date * 1000)
  return {
    day: value.getDay() + 1,
    month: value.toLocaleString('en', { month: 'long' }),
    year: value.getFullYear(),
  }
})
</script>

<style lang="scss">
.news__card {
  display: flex;
  width: rem(536);
  min-height: rem(554);
  flex-direction: column;
  align-items: flex-start;
  border-radius: rem(16);
  border: 1px solid $color-primary;
  overflow: hidden;

  &-content {
    display: flex;
    flex-direction: column;
    row-gap: rem(16);
    padding: rem(32);
    height: 100%;
  }

  &-title {
    font-size: rem(22);
  }

  &-img {
    height: rem(250);
  }

  &-link {
    width: fit-content;
    margin-top: auto;
    border-radius: 360px;
    background: $color-bg;
    padding: rem(4) rem(16);
    font-size: rem(14);
    line-height: 140%;
  }

  &-date {
    display: flex;
    align-items: center;
    color: $color-grey;
    column-gap: rem(4);
    font-size: rem(15);
    line-height: 110%;
    font-weight: bold;

    &-day {
      font-size: rem(36);
      line-height: 100%;
      font-weight: 400;
    }
  }
}
</style>
