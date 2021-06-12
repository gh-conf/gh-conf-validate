# gh-conf-validate

[![npm (scoped)](https://img.shields.io/npm/v/@gh-conf/gh-conf-validate)](https://www.npmjs.com/package/@gh-conf/gh-conf-validate)
[![Build](https://github.com/gh-conf/gh-conf-validate/actions/workflows/nodejs.yml/badge.svg)](https://github.com/gh-conf/gh-conf-validate/actions/workflows/nodejs.yml)
[![Github Repo Size](https://img.shields.io/github/repo-size/gh-conf/gh-conf-validate.svg)](https://github.com/gh-conf/gh-conf-validate)
[![npm](https://img.shields.io/npm/dt/@gh-conf/gh-conf-validate)](https://www.npmjs.com/package/@gh-conf/gh-conf-validate)
[![GitHub](https://img.shields.io/github/license/gh-conf/gh-conf-validate)](https://github.com/gh-conf/gh-conf-validate/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/gh-conf/gh-conf-validate.svg)](https://github.com/gh-conf/gh-conf-validate/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/gh-conf/gh-conf-validate.svg)](https://github.com/gh-conf/gh-conf-validate/commits/master)

Github config libraries validator

> Give us a :star: if you like our work :heart:

<a href="https://www.buymeacoffee.com/gh-conf" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
<a href="https://www.patreon.com/bePatron?u=15454240" target="_blank"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron!" height="40"></a>

Please consider donating, if you like my work

## Install

```
$ npm install @gh-conf/gh-conf-validate
```

## Usage

```javascript
const { validatePath } = require('@gh-conf/gh-conf-validate');

// Valid path
const isValid = validatePath('./gh-conf-validate');
console.log(isValid);
// Output
// true

// Invalid path
try {
  validatePath();
} catch (err) {
  console.log(err);

  // Output
  /**
  * {
  *   status: 'err',
  *   message: 'No path input',
  *   data: {}
  * }
  **/
}
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/gh-conf-validate/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
