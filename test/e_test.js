/**
 * Test case for e.
 * Runs with mocha.
 */
'use strict'

const e = require('../lib/e.js')
const mkdirp = require('mkdirp')
const fs = require('fs')
const assert = require('assert')

let tmpDir = __dirname + '/../tmp'
describe('e', function () {
  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })

  it('E', (done) => {
    let svg = e(512, 256, '#38E')
    fs.writeFile(tmpDir + '/testing-e.svg', svg, (err) => {
      assert.ifError(err)
      done()
    })
  })
})

/* global describe, before, after, it */