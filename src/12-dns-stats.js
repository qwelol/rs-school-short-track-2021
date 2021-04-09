/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const dns = domain.split('.');
    let acc = '';
    for (let j = dns.length - 1; j >= 0; j--) {
      acc += `.${dns[j]}`;
      if (result[acc]) {
        result[acc]++;
      } else {
        result[acc] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
