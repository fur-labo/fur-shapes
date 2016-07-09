/**
 * Test case for f.
 * Runs with mocha.
 */
'use strict'

const f = require('../lib/f.js')
const mkdirp = require('mkdirp')
const fs = require('fs')
const assert = require('assert')

let tmpDir = __dirname + '/../tmp'

describe('f', function () {
  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })

  it('F', (done) => {
    let svg = f(512, 256, '#38E')
    fs.writeFile(tmpDir + '/testing-f.svg', svg, (err) => {
      assert.ifError(err)
      done()
    })
  })
})

/* global describe, before, after, it */
