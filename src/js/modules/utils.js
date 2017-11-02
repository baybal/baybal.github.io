/**
 * Copies properties from one object to another (merge).
 */
export const extend = (to, from) => {
  if (isObject(to) && isObject(from)) {
    for (let key in from) {
      to[key] = from[key]
    }
  }
  return to
}

/**
 * Checks if the given argument is an object or not.
 */
export const isObject = (ob) => {
  return typeof ob === 'object' && ob !== null
}

/**
 * Checks if the given argument is a number or not.
 */
export const isNumber = (num) => {
  return typeof num === 'number' && !isNaN(num)
}

/**
 * Gets a random array item index.
 */
export const getRandomArrayIndex = (array) => {
  return Math.floor(Math.random() * array.length)
}
