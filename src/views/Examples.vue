<script setup>
import { ref, onMounted } from 'vue'

const INFINITY_SCROLL_EL_ID = 'infinityScroll'

const intersectionObserver = new IntersectionObserver(entries => {
  entries[0].isIntersecting && updateCats()
}, {
  threshold: 0.8,
})
const cats = ref([])
const catUpdatesCount = ref(0)

async function getCats (urlType, limit) {
  const apiUrl = urlType ? 'https://api.thecatapi.com/v1/images/search' : 'https://cataas.com/api/cats'
  const apiParams = {
    limit,
  }
  const response = await fetch(`${apiUrl}?${new URLSearchParams(apiParams)}`, {
    method: 'GET',
  })

  return response.json()
}

async function updateCats () {
  const INIT_LIMIT = 30
  const UPDATE_LIMIT = 10
  cats.value = [
    ...cats.value,
    ...await getCats(
      catUpdatesCount.value % 2 !== 0,
      catUpdatesCount.value === 0 ? INIT_LIMIT : UPDATE_LIMIT
    )
  ]
  catUpdatesCount.value++
}

onMounted( () => {
  updateCats()
  intersectionObserver.observe(document.getElementById(INFINITY_SCROLL_EL_ID))
})

</script>

<template>
  <main class="wrapper-full-height">
    <section class="cats">
      <img
        v-for="(cat, index) in cats"
        :key="index"
        :id="cat.id"
        :src="cat.url || `//cataas.com/cat/${cat.id}`"
        :alt="`Cat with id ${cat.id}`"
        loading="lazy"
      >
    </section>
    <div
      :id="INFINITY_SCROLL_EL_ID"
      :style="{
        height: '200px'
      }"
    />
  </main>
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