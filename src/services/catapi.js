import { fetchGet } from '@/services/fetch'

const url = 'https://api.thecatapi.com/v1/'
const headers = {
  'x-api-key': 'live_zTdHz4TZDwJd8jHO9MfwgE8sHU3G6ZzXt3zaZWXknkt72OzVYY5Q0Rjfsvhs8l0E',
}

async function getBreeds () {
  return await fetchGet({
    url: url + 'breeds',
    headers,
  })
}

async function getCats (params) {
  return await fetchGet({
    url: url + 'images/search',
    params,
    headers,
  })
}

export {
  getBreeds as catapiGetBreeds,
  getCats as catapiGetCats,
}