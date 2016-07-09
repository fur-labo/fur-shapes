/**
 * Define theme "e".
 * @function e
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */
'use strict'

const _svg = require('./_svg')
const numcal = require('numcal')

/** @lends e */
function e (width, height, color1, color2) {
  let lineWidth = numcal.min(width, height) * 0.05

  let r = numcal.min(height, width) * 0.2

  let innerWidth = width - lineWidth * 4
  let innerHeight = height - lineWidth * 4

  let innerR = numcal.min(innerWidth, innerHeight) * 0.2

  return _svg(width, height, {
    rect: [
      {
        '@': {
          x: lineWidth / 2,
          y: lineWidth / 2,
          rx: r,
          ry: r,
          width: width - lineWidth,
          height: height - lineWidth,
          fill: color2
        }
      },
      {
        '@': {
          x: lineWidth / 2,
          y: lineWidth / 2,
          width: width - lineWidth,
          height: height - lineWidth,
          rx: r,
          ry: r,
          fill: 'none',
          'stroke-width': lineWidth,
          stroke: color1
        }
      },
      {
        '@': {
          x: lineWidth * 2,
          y: lineWidth * 2,
          width: innerWidth,
          height: innerHeight,
          fill: color1,
          rx: innerR,
          ry: innerR
        }
      }
    ]
  })
}

e.$reversed = false

module.exports = e
