<script setup>
import NavMenu from '@/components/NavMenu.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavMenu />
  </header>

  <RouterView />
</template>

<style lang="scss" src="@/assets/scss/main.scss" />
