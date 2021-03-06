/**
 * Define theme "g".
 * @function g
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */
'use strict'

const _svg = require('./_svg')
const numcal = require('numcal')

/** @lends g */
function g (width, height, color1, color2) {
  let r = numcal.min(height, width)

  return _svg(width, height, {
    rect: [
      {
        '@': {
          x: 0,
          y: 0,
          rx: r,
          ry: r,
          width: width,
          height: height,
          fill: color2
        }
      },
      {
        '@': {
          x: 0,
          y: 0,
          rx: r,
          ry: r,
          width: width,
          height: height,
          fill: color1
        }
      }
    ]

  })
}

g.$reversed = false

module.exports = g
