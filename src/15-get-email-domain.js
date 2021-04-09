/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = email.match(/(@{1})([a-z,A-Z,0-9,_,-]+.[a-z,A-Z,0-9,_,-]+)/);
  return result ? result[2] : null;
}

module.exports = getEmailDomain;
