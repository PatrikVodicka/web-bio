<script setup>
import { fetchGet } from '@/services/fetch'
import { ref, onMounted } from 'vue'

const catBreeds = ref([])

onMounted(async () => {
  const breeds = await fetchGet('https://api.thecatapi.com/v1/breeds')
  catBreeds.value = breeds.map(({id, name}) => ({id, name}))
})
</script>

<template>
  <table>
    <tr
      v-for="breed in catBreeds"
    >
      <th
        v-text="breed.id"
      />
      <td
        v-text="breed.name"
      />
    </tr>
  </table>
</template>
