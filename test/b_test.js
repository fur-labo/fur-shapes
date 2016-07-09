/**
 * Test case for b.
 * Runs with mocha.
 */
'use strict'

const b = require('../lib/b.js')
const mkdirp = require('mkdirp')
const fs = require('fs')
const assert = require('assert')

let tmpDir = __dirname + '/../tmp'

describe('b', function () {
  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })

  after((done) => {
    done()
  })

  it('B', (done) => {
    let svg = b(512, 256, '#38E')
    fs.writeFile(tmpDir + '/testing-b.svg', svg, (err) => {
      assert.ifError(err)
      done()
    })
  })
})

/* global describe, before, after, it */
