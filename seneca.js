// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
  const simpleAddress = /^.*@myseneca\.ca$/.test(email);
  const professorAddress = /^.*@senecacollege\.ca$/.test(email);
  const oldAddress = /^.*@senecac\.on\.ca$/.test(email);

  return (simpleAddress || professorAddress || oldAddress);
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  if (typeof name !== 'string') {
    throw new Error('Error');
  }
  return `${name.replace(/[^a-zA-Z0-9.]/g, '')}@myseneca.ca`;
};
