/**
 * Calls API using GET method.
 * @param {Object} options
 * @param {String} options.url EP url
 * @param {Object} options.params GET params
 * @param {Object} options.headers request headers
 * @param {Boolean} options.hasRecall recalls api on error if true
 * @returns {Promise<any>} API response
 */
async function get ({ url, params, headers , hasRecall}) {
  let response
  try {
    response = await fetch(`${url}${params ? '?' : ''}${new URLSearchParams(params)}`, {
      method: 'GET',
      headers,
    })
  } catch (e) {
    console.error(e)
    hasRecall && await get({ url, params, headers, hasRecall })
  }

  return response.json()
}

export {
  get as fetchGet,
}