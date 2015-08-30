/**
 * Define theme "h".
 * @memberof module:fur-shapes/lib
 * @memberof module:fur-shapes/lib
 * @function h
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg'),
    numcal = require('numcal');

/** @lends h */
function h(width, height, color1, color2) {
    var r = numcal.min(height, width),
        lineWidth = numcal.min(width, height) * 0.05;

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
            },
            {
                '@': {
                    x: lineWidth * 2,
                    y: lineWidth * 2,
                    rx: r,
                    ry: r,
                    width: width - lineWidth * 4,
                    height: height - lineWidth * 4,
                    fill: color1
                }
            }
        ]
    });
}

module.exports = h;