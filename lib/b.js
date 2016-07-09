/**
 * Define theme "b". Rect with 50% corner radius.
 * @function b
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color - Shape color.
 * @returns {string} - SVG string.
 */
'use strict'

const _svg = require('./_svg')
const numcal = require('numcal')

/** @lends b */
function b (width, height, color1, color2) {
  let lineWidth = numcal.min(width, height) * 0.05

  return _svg(width, height, {
    rect: [
      {
        '@': {
          x: 0,
          y: 0,
          width: width,
          height: height,
          fill: color2
        }
      },
      {
        '@': {
          x: lineWidth / 2,
          y: lineWidth / 2,
          width: width - lineWidth,
          height: height - lineWidth,
          fill: 'none',
          'stroke-width': lineWidth,
          stroke: color1
        }
      },
      {
        '@': {
          x: lineWidth * 2,
          y: lineWidth * 2,
          width: width - lineWidth * 4,
          height: height - lineWidth * 4,
          fill: color1
        }
      }
    ]
  })
}

b.$reversed = false

module.exports = b
