const expect = require('chai').expect;

const { 
  validatePath
} = require('../index');

const ERROR_MESSAGE_NO_PATH = 'No path input';
const ERROR_MESSAGE_CONFIG_PATH = `Pass only repository path, do not include '.git/confg'`;
const ERROR_STATUS = 'err';

describe('validatePath', () => {
  it('should throw error, no path input', () => {
    try {
      validatePath()
    } catch (err) {
      expect(err.status).to.equal(ERROR_STATUS);
      expect(err.message).to.equal(ERROR_MESSAGE_NO_PATH)
      expect(err.data).to.deep.equal({});
    }
  });
  it('should validate git/config path in not there in input', () => {
    try {
      validatePath('./gh-conf-validate/.git/config');
    } catch (err) {
      expect(err.status).to.equal(ERROR_STATUS);
      expect(err.message).to.equal(ERROR_MESSAGE_CONFIG_PATH)
      expect(err.data).to.deep.equal({});
    }
  });
  it('should return true', () => {
    const isValid = validatePath('./gh-conf-validate/');
    expect(isValid).to.equal(true);
  })
});
