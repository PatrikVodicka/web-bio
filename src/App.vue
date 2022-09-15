<script setup>
import CVButton from '@/components/CVButton.vue'
import NavMenu from '@/components/NavMenu.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavMenu />
  </header>

  <RouterView />
  <CVButton />
</template>

<style lang="scss" src="@/assets/scss/main.scss" />
