/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj = {};
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    const findIndex = obj[s1[i]] ? obj[s1[i]] : 0;
    const index = s2.indexOf(s1[i], findIndex);
    if (index !== -1) {
      obj[s1[i]] = index + 1;
      result++;
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
