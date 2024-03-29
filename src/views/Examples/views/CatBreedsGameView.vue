<script setup>
import SlicedButton from '@/components/SlicedButton.vue'
import { catapiGetCats } from '@/services/api/catapi'
import { useImmer } from '@/services/immer'
import { getRandomNumberInInterval, getRandomItems } from '@/utils/random'
import { ref, onBeforeMount } from 'vue'
import { useCatsStore } from '@/stores/cats'

const catBreeds = ref([])
const gameScore = ref(0)
const randomCat = ref(null)
const [catBreedOptions, catBreedOptionsUpdate] = useImmer([])

/**
 * Fetch random cat with breed details and parse response for easier handling.
 * @returns {Promise<void>}
 */
async function fetchRandomCat () {
  let response = await catapiGetCats({
    has_breeds: 1,
  })

  // sometimes API response has only empty array of breeds
  if (!response[0].breeds.length) {
    await fetchRandomCat()
  }

  response = {
    ...response[0],
    breed: response[0].breeds[0],
  }
  delete response.breeds
  randomCat.value = response
  resetBreedOptions()
}

/**
 * Sets three random options and replaces one of them with the correct answer.
 */
function resetBreedOptions () {
  const breeds = useCatsStore().getBreedNames.filter(breed => breed.id !== randomCat.value.breed.id)

  catBreedOptionsUpdate(() => getRandomItems(breeds, 3))

  catBreedOptionsUpdate(options => {
    const randomArrayIndex = getRandomNumberInInterval(0, options.length - 1)
    options[randomArrayIndex] = randomCat.value.breed
  })
}

/**
 * Reset whole game.
 * @returns {Promise<void>}
 */
async function resetGame () {
  gameScore.value = 0
  await fetchRandomCat()
}

async function handleOptionSelect ({ target }, option, index) {
  target.blur()

  const isOptionCorrect = option.id === randomCat.value.breed.id
  catBreedOptionsUpdate(options => {
    options[index].highlight = isOptionCorrect ? 'good' : 'bad'
  })

  if (!isOptionCorrect) {
    await resetGame()
    return
  }

  gameScore.value++
  await fetchRandomCat()
}

onBeforeMount(async () => {
  await useCatsStore().fetchBreeds()
  catBreeds.value = useCatsStore().getBreedNames
  await fetchRandomCat()
})
</script>

<template>
  <section class="wrapper-game">
    <h1 class="mt-0">Which breed does this cute cat belong to?</h1>
    <div
      v-if="randomCat"
      class="cat-preview"
      :style="{
        backgroundImage: `url(${randomCat.url})`
      }"
    />
    <div
      v-if="catBreedOptions.length"
      class="d-flex flex-column flex-sm-row"
    >
      <button
        v-for="(breed, index) in catBreedOptions"
        :class="[
          'btn cat-breed-option',
          breed?.highlight,
        ]"
        :key="index"
        v-text="breed.name"
        @click="event => handleOptionSelect(event, breed, index)"
      />
    </div>
    <h2>Score {{ gameScore }}</h2>
    <sliced-button
      :buttons="[
        {
          entity: 'button',
          text: 'Reset',
          click: resetGame,
        },
        {
          text: 'Cat catalog',
          to: '/examples/cat-breeds-catalog',
        },
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
.wrapper-game {
  margin: auto;
  padding: 15px;
  text-align: center;

  @include media-breakpoint-up(md) {
    max-width: 75%;
  }

  @include media-breakpoint-up(lg) {
    max-width: 60%;
  }

  @include media-breakpoint-up(xl) {
    max-width: 50%;
  }
}

.cat-preview {
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 100%;
  overflow: hidden;
  height: 50vh;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.cat-breed-option {
  flex: 1;
  margin: 10px 0;
  padding: 10px;
  border: 2px solid $white;

  @include media-breakpoint-up(sm) {
    margin: 10px;
  }

  &.good {
    background: green;
  }
  &.bad {
    background: red;
  }
}
</style>
