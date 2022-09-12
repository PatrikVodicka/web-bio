<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="menu">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/my-work">My work</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
a {
  color: $white;
  text-decoration: none;

  &:hover {
    color: $white;
    text-decoration: underline;
  }
}

.menu {
  position: absolute;
  inset: 0 0 100% 0;
  user-select: none;
  text-align: center;
  z-index: $nav-zix;

  > * {
    position: relative;
    display: inline-block;
    padding: 10px;
    max-height: $nav-height;

    &:after {
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 1px;
      width: 0;
      content: '';
      background: $white;
      transform: translateX(-50%);
      transition: width ease .15s;
    }

    &:hover,
    &:focus,
    &:visited {
      text-decoration: none;
    }

    &:hover:after {
      width: 100%;
    }
  }

  .router-link-exact-active:not(:first-of-type):after {
    width: 100%;
  }
}
</style>