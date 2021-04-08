/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let a = 0;
  let b = array.length - 1;
  let c = Math.round((a + b) / 2);
  let rightStep;
  while (value !== array[c]) {
    if (array[c] > value) {
      rightStep = false;
      b = c;
    } else {
      rightStep = true;
      a = c;
    }
    c = rightStep ? Math.ceil((a + b) / 2) : Math.floor((a + b) / 2);
  }
  return c;
}

module.exports = findIndex;
