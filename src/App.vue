<template>
  <div class="app">
    <IndexHeader />
    <IndexMain />
    <IndexFooter />
  </div>
</template>

<script setup>
import IndexHeader from '@/components/index/header.vue'
import IndexMain from '@/components/index/main.vue'
import IndexFooter from '@/components/index/footer.vue'
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
