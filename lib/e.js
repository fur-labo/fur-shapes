/**
 * Define theme "e".
 * @memberof module:fur-shapes/lib
 * @function e
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends e */
function e(width, height, color1, color2) {

    var lineWidth = numcal.min(width, height) * 0.05;

    var r = numcal.min(height, width) * 0.2;

    var innerWidth = width - lineWidth * 4,
        innerHeight = height - lineWidth * 4;

    var innerR = numcal.min(innerWidth, innerHeight) * 0.2;

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
    });
}

e.$reversed = false;

module.exports = e;
