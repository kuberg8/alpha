<template>
  <div class="news__list">
    <NewsCard v-for="(card, i) in cards" :key="i" :data="card" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import NewsCard from '@/components/NewsCard.vue'

defineProps({
  cards: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss">
.news__list {
  @include base-container;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: rem(48);
  row-gap: rem(64);
  padding-top: rem(64);
  padding-bottom: rem(72);
}
</style>
