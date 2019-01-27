const { formatError } = require('@gh-conf/gh-conf-response');


/**
 * Handles all the validations
 * Throws error if any validate fails
 * @param {String} path 
 * @param {String} gitConfigPath 
 */
const validatePath = (path, gitConfigPath) => {

  // If no path is given as input
  if (!path) {
    throw formatError('No path input', {});
  }

  // If git config path is already added with input path
  if (path.includes(gitConfigPath)) {
    throw formatError(
      `Pass only repository path, do not include '${gitConfigPath}'`, 
      {}
    );
  }

  return true;
}


module.exports = validatePath;
