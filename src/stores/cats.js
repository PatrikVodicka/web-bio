import { fetchGet } from '@/services/fetch'
import { defineStore } from 'pinia'

const BREED_IMAGE_MAP = {
  mala: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/BrownVarientAsianCat.JPG',
  ebur: 'https://cfa.org/wp-content/uploads/2019/07/eb-profile1-400x337.jpg',
}

export const useCatsStore = defineStore({
  id: 'cats',
  state: () => ({
    breeds: [],
  }),
  actions: {
    async fetchBreeds() {
      if (!this.breeds.length) {
        const breeds = await fetchGet('https://api.thecatapi.com/v1/breeds')
        this.breeds = breeds.map(breed =>
          Object.keys(BREED_IMAGE_MAP).includes(breed.id)
            ? { ...breed, image: { url: BREED_IMAGE_MAP[breed.id] } }
            : breed
        )
      }
    }
  }
})