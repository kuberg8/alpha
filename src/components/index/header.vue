<template>
  <header class="header">
    <img class="header__logo" src="@/assets/images/logo.svg" />
  </header>
</template>

<style lang="scss">
.header {
  @include base-container;

  display: flex;
  padding-top: rem(40);
  padding-bottom: rem(40);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);

  &__logo {
    height: rem(48);
    width: rem(152);
  }
}
</style>
