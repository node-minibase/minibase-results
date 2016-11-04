/*!
 * minibase-results <https://github.com/node-minibase/minibase-results>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var through2 = require('through2')
var extend = require('extend-shallow')

module.exports = function minibaseResults (opts) {
  return function minibaseResults (self) {
    self.options = extend({
      serial: false,
      settle: true,
      showStack: false
    }, self.options, opts)

    self.define('tests', [])
    self.define('testErrors', null)
    self.define('testContext', { context: {} })
    self.define('stream', through2.obj())
    self.delegate({
      pass: 0,
      fail: 0,
      skip: 0,
      todo: 0,
      count: 0,
      runned: 0,
      anonymous: 0
    })
  }
}
