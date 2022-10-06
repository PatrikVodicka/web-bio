<script setup>
import { ref, onMounted, onDeactivated } from 'vue'

const INFINITY_SCROLL_EL_ID = 'infinityScroll'

const intersectionObserver = new IntersectionObserver(entries => {
  entries[0].isIntersecting && updateCats()
}, {
  threshold: 0.1,
})
const cats = ref([])
const catUpdatesCount = ref(0)

async function getCats (page, limit = 30) {
  const apiUrl = 'https://api.thecatapi.com/v1/images/search'
  const apiParams = {
    limit,
    page,
  }
  const response = await fetch(`${apiUrl}?${new URLSearchParams(apiParams)}`, {
    method: 'GET',
  })

  return response.json()
}

async function updateCats () {
  cats.value = [
    ...cats.value,
    ...await getCats(catUpdatesCount.value)
  ]
  catUpdatesCount.value++
}

onMounted( () => {
  updateCats()
  intersectionObserver.observe(document.getElementById(INFINITY_SCROLL_EL_ID))
})

onDeactivated(() => {
  intersectionObserver.unobserve(document.getElementById(INFINITY_SCROLL_EL_ID))
})
</script>

<template>
  <section class="cats">
    <img
      v-for="(cat, index) in cats"
      :key="index"
      :id="cat.id"
      :src="cat.url"
      :alt="`Cat with id ${cat.id}`"
      loading="lazy"
    >
  </section>
  <div
    :id="INFINITY_SCROLL_EL_ID"
    :style="{
      height: '300px',
    }"
  />
</template>

<style lang="scss" scoped>
.cats {
  text-align: center;
  min-height: 100vh;

  img {
    display: inline-block;
    max-width: 100%;
    height: min-content;
    max-height: 300px;
    padding: 15px;
  }
}
</style>