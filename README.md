# [minibase-results][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Plugin for [minibase][] that adds useful initial properties for test results

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i minibase-results --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const minibaseResults = require('minibase-results')
```

## API

### [minibaseResults](index.js#L45)
> Initializes defaults for test runners

**Params**

* `opts` **{Object}**: optional options, merged with `app.options`    
* `returns` **{Function}**: plugin function for [minibase][]'s `.use` method  

**Example**

```js
var app = require('minibase')
var results = require('minibase-results')

console.log(app.options.settle) // => true
console.log(app.tests) // => undefined
console.log(app.stats) // => undefined

app.use(results({ settle: false }))

console.log(app.options.settle) // => false
console.log(app.tests) // => []
console.log(app._stream) // => through2 object mode stream
console.log(app.stats.count) // => 0
console.log(app.stats.pass) // => 0
console.log(app.stats.fail) // => 0
console.log(app.stats.skip) // => 0
console.log(app.stats.todo) // => 0
console.log(app.stats.runned) // => 0
console.log(app.stats.anonymous) // => 0
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/node-minibase/minibase-results/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[npmjs-url]: https://www.npmjs.com/package/minibase-results
[npmjs-img]: https://img.shields.io/npm/v/minibase-results.svg?label=minibase-results

[license-url]: https://github.com/node-minibase/minibase-results/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/minibase-results.svg

[downloads-url]: https://www.npmjs.com/package/minibase-results
[downloads-img]: https://img.shields.io/npm/dm/minibase-results.svg

[codeclimate-url]: https://codeclimate.com/github/node-minibase/minibase-results
[codeclimate-img]: https://img.shields.io/codeclimate/github/node-minibase/minibase-results.svg

[travis-url]: https://travis-ci.org/node-minibase/minibase-results
[travis-img]: https://img.shields.io/travis/node-minibase/minibase-results/master.svg

[coveralls-url]: https://coveralls.io/r/node-minibase/minibase-results
[coveralls-img]: https://img.shields.io/coveralls/node-minibase/minibase-results.svg

[david-url]: https://david-dm.org/node-minibase/minibase-results
[david-img]: https://img.shields.io/david/node-minibase/minibase-results.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[minibase]: https://github.com/node-minibase/minibase