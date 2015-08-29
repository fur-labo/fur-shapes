var furShapes = require('fur-shapes'),
    fs = require('fs');


var themeA = furShapes.a(256, 215, '#38E'),
    themeB = furShapes.b(512, 256, '#E00');


fs.writeFileSync('shape-01.svg', themeA);
fs.writeFileSync('shape-02.svg', themeB);