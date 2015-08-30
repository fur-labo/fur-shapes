/**
 * Define theme "d".
 * @memberof module:fur-shapes/lib
 * @function d
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends d */
function d(width, height, color1, color2) {
    var r = numcal.min(height, width) * 0.1;

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
    });

}

module.exports = d;