'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-luobata-vue-libs:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'build',
      'dist',
      'src',
      'test',
      'src/header',
      '.gitignore',
      '.babelrc',
      '.eslintrc',
      '.tern-project',
      'package.json',
      'build/build.js',
      'build/util.js',
      'build/vue-loader.conf.js',
      'build/dev-server.js',
      'build/rollup.config.js',
      'build/webpack.config-src.js',
      'build/webpack.config-test.js',
      'src/index_global.js',
      'src/index_local.js',
      'src/header/header.vue',
      'test/app.vue',
      'test/index.html',
      'test/index.js'
    ]);
  });
});
