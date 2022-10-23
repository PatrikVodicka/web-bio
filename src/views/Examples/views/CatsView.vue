<script setup>
import { catapiGetCats } from '@/services/catapi'
import { ref, onMounted, onDeactivated } from 'vue'

const INFINITY_SCROLL_EL_ID = 'infinityScroll'

const intersectionObserver = new IntersectionObserver(entries => {
  entries[0].isIntersecting && fetchCats()
}, {
  threshold: 0.1,
})
const cats = ref([])
const catUpdatesCount = ref(0)

async function fetchCats () {
  cats.value = [
    ...cats.value,
    ...await catapiGetCats({
      page: catUpdatesCount.value,
      limit: 30,
    })
  ]
  catUpdatesCount.value++
}

onMounted( () => {
  fetchCats()
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