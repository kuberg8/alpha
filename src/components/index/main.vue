<template>
  <main class="main">
    <div class="main__hero">
      <h1 class="main__title">Новости</h1>
    </div>

    <NewsList :cards="cards" />
    <VButton v-if="cards.length && pagination?.total > pagination?.current" @click="loadCards(pagination.current + 1)">Загрузить ещё</VButton>
    <h2 v-else-if="!cards.length && firstLoad">Ничего не найдено</h2>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NewsList from '@/components/NewsList.vue'
import VButton from '@/components/VButton.vue'

const cards = ref([])
const firstLoad = ref(false)
const pagination = ref(null)

const loadCards = async (page = '') => {
  await fetch(`https://flems.github.io/test/api/news/${page}`)
    .then((res) => res.json())
    .then(({ items, nav }) => {
      cards.value = [...cards.value, ...items]
      pagination.value = nav
      if (!firstLoad.value) firstLoad.value = true
    })
}

onMounted(() => {
  loadCards()
})
</script>

<style lang="scss">
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: rem(72);

  &__hero {
    @include base-container;

    display: flex;
    align-items: flex-end;
    padding-bottom: rem(48);
    height: rem(320);
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/assets/images/hero.jpg');
  }
}
</style>
