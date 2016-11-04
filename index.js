/*!
 * minibase-results <https://github.com/node-minibase/minibase-results>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var through2 = require('through2')
var extend = require('extend-shallow')

/**
 * > Initializes defaults for test runners
 *
 * **Example**
 *
 * ```js
 * var app = require('minibase')
 * var results = require('minibase-results')
 *
 * console.log(app.options.settle) // => true
 * console.log(app.tests) // => undefined
 * console.log(app.stats) // => undefined
 *
 * app.use(results({ settle: false }))
 *
 * console.log(app.options.settle) // => false
 * console.log(app.tests) // => []
 * console.log(app._stream) // => through2 object mode stream
 * console.log(app.stats.count) // => 0
 * console.log(app.stats.pass) // => 0
 * console.log(app.stats.fail) // => 0
 * console.log(app.stats.skip) // => 0
 * console.log(app.stats.todo) // => 0
 * console.log(app.stats.runned) // => 0
 * console.log(app.stats.anonymous) // => 0
 * ```
 *
 * @param  {Object} `opts` optional options, merged with `app.options`
 * @return {Function} plugin function for [minibase][]'s `.use` method
 * @api public
 */

module.exports = function minibaseResults (opts) {
  return function minibaseResults (self) {
    var stats = {
      pass: 0,
      fail: 0,
      skip: 0,
      todo: 0,
      count: 0,
      runned: 0,
      anonymous: 0
    }

    self.options = extend({
      serial: false,
      settle: true,
      showStack: false
    }, self.options, opts)

    self.define('stats', stats)
    self.define('tests', [])
    self.define('testErrors', null)
    self.define('testContext', { context: {} })
    self.define('_stream', through2.obj())
  }
}
