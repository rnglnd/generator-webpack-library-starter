'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-webpack-library-starter:app', function () {
  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({name: 'random-javascript-lib'})
      .toPromise();
  });

  it('creates files', function () {
    const tplPath = path.resolve(__dirname, '../app/templates');
    assert.file([
      '.babelrc',
      '.eslintrc',
      '.gitignore',
      'LICENSE',
      'package.json',
      'README.md',
      'webpack.config.js',
      '__tests__/index.js',
      'examples/index.js',
      'examples/style.css',
      'src/index.js',
    ].map(f => path.join(tplPath, f)));
  });
});