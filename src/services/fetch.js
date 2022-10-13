/**
 * Calls API using GET method.
 * @param {String} url EP url
 * @param {Object} params GET params
 * @returns {Promise<any>} API response
 */
async function fetchGet (url, params) {
  const response = await fetch(`${url}?${new URLSearchParams(params)}`, {
    method: 'GET',
  })

  return response.json()
}

export {
  fetchGet,
}