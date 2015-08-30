/**
 * Define theme "a". Simple rect.
 * @memberof module:fur-shapes/lib
 * @function a
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} color1 - Shape color 1.
 * @param {string} color2 - Shape color 2.
 * @returns {string} - SVG string.
 */

var _svg = require('./_svg');

/** @lends a */
function a(width, height, color1, color2) {

    return _svg(width, height, {
        rect: [,
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
                    x: 0,
                    y: 0,
                    width: width,
                    height: height,
                    fill: color1
                }
            }
        ]
    });
}
a.$reversed = false;
module.exports = a;