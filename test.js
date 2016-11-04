/*!
 * minibase-results <https://github.com/node-minibase/minibase-results>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var plugin = require('./index')
var MiniBase = require('minibase').MiniBase

test('should have default options - serial, showStack, settle', function (done) {
  var app = new MiniBase()
  app.use(plugin())
  test.strictEqual(app.options.serial, false)
  test.strictEqual(app.options.settle, true)
  test.strictEqual(app.options.showStack, false)
  done()
})

test('should be able to change options from MiniBase ctor', function (done) {
  var app = new MiniBase({
    settle: false,
    showStack: true
  })
  app.use(plugin())
  test.strictEqual(app.options.showStack, true)
  test.strictEqual(app.options.settle, false)
  done()
})

test('should be able to change options from plugin opts', function (done) {
  var runner = new MiniBase()
  runner.use(plugin({ serial: true }))
  test.strictEqual(runner.options.serial, true)
  done()
})

test('should have initial default properties', function (done) {
  var app = new MiniBase()
  app.use(plugin())
  test.ok(app.tests)
  test.ok(app.tests.length === 0)
  test.ok(app.testErrors === null)
  test.ok(app.testContext)
  test.ok(app.testContext.context)
  test.ok(app.stream)
  test.strictEqual(app.pass, 0)
  test.strictEqual(app.fail, 0)
  test.strictEqual(app.skip, 0)
  test.strictEqual(app.todo, 0)
  test.strictEqual(app.count, 0)
  test.strictEqual(app.runned, 0)
  test.strictEqual(app.anonymous, 0)
  done()
})
