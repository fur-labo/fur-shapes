/**
 * Define theme "i".
 * @function i
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */

const _svg = require('./_svg')
const numcal = require('numcal')

/** @lends i */
function i (width, height, color1, color2) {
  let r = numcal.min(height, width)
  let lineWidth = numcal.min(width, height) * 0.05

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
          x: lineWidth / 2,
          y: lineWidth / 2,
          rx: r,
          ry: r,
          width: width - lineWidth,
          height: height - lineWidth,
          fill: 'none',
          'stroke-width': lineWidth,
          stroke: color1
        }
      }
    ]
  })
}

i.$reversed = true

module.exports = i
