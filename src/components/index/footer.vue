<template>
  <footer class="footer">
    <img class="footer__logo" src="@/assets/images/logo.svg" />
    <div>© alpha, 2023</div>
  </footer>
</template>

<style lang="scss">
.footer {
  @include base-container;

  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: rem(16);
  height: rem(202);
  background: $color-bg;
  font-size: rem(16);
  line-height: 140%;
  color: #81899D;

  &__logo {
    height: rem(36);
    width: rem(114);
  }
}
</style>
