<script setup>
import { ref, onMounted } from 'vue'
import { useCatsStore } from '@/stores/cats'

const catBreeds = ref([])

onMounted(async () => {
  await useCatsStore().fetchBreeds()
  catBreeds.value = useCatsStore().breeds
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
