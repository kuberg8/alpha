<template>
  <button class="btn" v-bind="$attrs">
    <slot />
  </button>
</template>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  color: $color-primary;
  border: 1px solid $color-primary;
  padding: 0 rem(32);
  height: rem(56);
}
</style>
