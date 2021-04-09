/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  if (str.length) {
    let counter = 0;
    for (let i = 0; i < str.length - 1; i++) {
      const letter = str[i];
      if (letter === str[i + 1]) {
        counter++;
      } else {
        result += counter ? `${counter + 1}${letter}` : letter;
        counter = 0;
      }
    }
    result += counter ? `${counter + 1}${str[str.length - 1]}` : str[str.length - 1];
  }
  return result;
}

module.exports = encodeLine;
