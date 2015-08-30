/**
 * Define theme "f".
 * @memberof module:fur-shapes/lib
 * @function f
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends f */
function f(width, height, color1, color2) {

    var lineWidth = numcal.min(width, height) * 0.05;
    var r = numcal.min(height, width) * 0.2;

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
                    width: width - lineWidth,
                    height: height - lineWidth,
                    rx: r,
                    ry: r,
                    fill: 'none',
                    'stroke-width': lineWidth,
                    stroke: color1
                }
            }
        ]
    });
}

module.exports = f;