/**
 * Calls API using GET method.
 * @param {Object} options
 * @param {String} options.url EP url
 * @param {Object} options.params GET params
 * @param {Object} options.headers request headers
 * @returns {Promise<any>} API response
 */
async function get ({ url, params, headers }) {
  const response = await fetch(`${url}${params ? '?' : ''}${new URLSearchParams(params)}`, {
    method: 'GET',
    headers,
  })

  return response.json()
}

export {
  get as fetchGet,
}