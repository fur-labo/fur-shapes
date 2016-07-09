/**
 * Test case for d.
 * Runs with mocha.
 */
'use strict'

const d = require('../lib/d.js')
const mkdirp = require('mkdirp')
const fs = require('fs')
const assert = require('assert')

let tmpDir = __dirname + '/../tmp'

describe('d', function () {
  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })
  after((done) => {

    done()
  })

  it('D', (done) => {
    let svg = d(512, 256, '#38E')
    fs.writeFile(tmpDir + '/testing-d.svg', svg, (err) => {
      assert.ifError(err)
      done()
    })
  })
})

/* global describe, before, after, it */
