<script setup>
import { fetchGet } from '@/services/fetch'
import { ref, onMounted } from 'vue'

const BREED_IMAGE_MAP = {
  mala: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/BrownVarientAsianCat.JPG',
  ebur: 'https://cfa.org/wp-content/uploads/2019/07/eb-profile1-400x337.jpg',
}

const catBreeds = ref([])

onMounted(async () => {
  const breeds = await fetchGet('https://api.thecatapi.com/v1/breeds')
  catBreeds.value = breeds.map(breed =>
    Object.keys(BREED_IMAGE_MAP).includes(breed.id)
      ? { ...breed, image: { url: BREED_IMAGE_MAP[breed.id] } }
      : breed
  )
})
</script>

<template>
  <section
    class="wrapper"
  >
    <div
      class="item"
      v-for="(breed, index) in catBreeds"
      :key="index"
    >
      <img
        class="item__image"
        :id="breed.id"
        :src="breed.image.url"
        :alt="breed.name"
        loading="lazy"
      />
      <span
        class="item__description"
      >
        {{ breed.name }}
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
  min-height: 100vh;
}

.item {
  position: relative;
  display: inline-block;
  margin: 15px;

  &__image {
    max-width: 100%;
    height: min-content;
    max-height: 300px;
  }

  &__description {
    position: absolute;
    margin: 0;
    padding: 15px;
    inset: auto 0 0 0;
    background: rgba(0,0,0,0.3);
    color: white;
    font-weight: bold;
  }
}
</style>
