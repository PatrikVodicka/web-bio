/**
 * Returns random number from interval with both arguments included.
 * @param min {Number}
 * @param max {Number}
 * @returns {Number}
 */
function getRandomNumberInInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Returns random unique items from an array.
 * @param array {Array}
 * @param itemsCount {Number}
 * @returns {array} Array of random unique items.
 */
function getRandomItems(array, itemsCount = 1) {
  const randomItems = []
  const randomNumbers = []

  while (randomItems.length < itemsCount) {
    const randomNumber = getRandomNumberInInterval(0, array.length)
    if (!randomNumbers.some(number => number === randomNumber)) {
      randomNumbers.push(randomNumber)
      randomItems.push(array[randomNumber])
    }
  }

  return randomItems
}


export {
  getRandomNumberInInterval,
  getRandomItems,
}