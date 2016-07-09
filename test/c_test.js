/**
 * Test case for c.
 * Runs with mocha.
 */
'use strict'

const c = require('../lib/c.js')
const mkdirp = require('mkdirp')
const fs = require('fs')
const assert = require('assert')

let tmpDir = __dirname + '/../tmp'

describe('c', function () {
  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })

  after((done) => {

    done()
  })
  it('C', (done) => {
    var svg = c(512, 256, '#38E')
    fs.writeFile(tmpDir + '/testing-c.svg', svg, (err) => {
      assert.ifError(err)
      done()
    })
  })
})

/* global describe, before, after, it */