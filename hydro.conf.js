/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var req = require('./index');

  hydro.set({
    plugins: [req],
    attach: global,
    suite: 'hydro-file-suite',
    proxies: {
      test: 'addTest',
      suite: 'addSuite',
    },
    formatter: 'hydro-doc',
    globals: {
      assert: require('simple-assert')
    },
    tests: [
      'test'
    ]
  });
};
