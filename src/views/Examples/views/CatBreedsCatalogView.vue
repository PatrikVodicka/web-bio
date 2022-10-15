<script setup>
import { ref, onMounted } from 'vue'
import { useCatsStore } from '@/stores/cats'

const catBreeds = ref([])

onMounted( async () => {
  await useCatsStore().fetchBreeds()
  catBreeds.value = useCatsStore().breeds
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
      <div class="item__side item__side--front">
        <img
          class="item__image"
          :id="breed.id"
          :src="breed?.image?.url || '//placekitten.com/300/300'"
          :alt="breed.name"
        />
        <span
          class="item__name"
        >
          {{ breed.name }}
        </span>
      </div>
      <div class="item__side item__side--back">
        <h3
          v-text="breed.name"
        />
        <h4
          v-if="breed.alt_names?.trim()"
          v-html="`&bdquo;${breed.alt_names}&ldquo;`"
        />
        <p
          v-text="breed.description"
        />
      </div>
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

  &:hover {
    .item__side--front {
      transform: rotateY(180deg);
    }
    .item__side--back {
      transform: rotateY(0deg);
    }
  }

  &__side {
    backface-visibility: hidden;
    transition: all 0.8s ease;

    &--back {
      position: absolute;
      inset: 0;
      padding: 15px;
      overflow-y: auto;
      margin: 0;
      background: rgba(255,255,255,0.3);
      color: $white;
      transform: rotateY(-180deg);
    }
  }

  &__image {
    max-width: 100%;
    height: min-content;
    max-height: 300px;
  }

  &__name {
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
