fur-shapes
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![Dependency Status][bd_gemnasium_shield_url]][bd_gemnasium_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/fur-repo/fur-shapes
[bd_travis_url]: http://travis-ci.org/fur-repo/fur-shapes
[bd_travis_shield_url]: http://img.shields.io/travis/fur-repo/fur-shapes.svg?style=flat
[bd_license_url]: https://github.com/fur-repo/fur-shapes/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/fur-repo/fur-shapes
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/fur-repo/fur-shapes.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/fur-repo/fur-shapes.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/fur-repo/fur-shapes
[bd_gemnasium_shield_url]: https://gemnasium.com/fur-repo/fur-shapes.svg
[bd_npm_url]: http://www.npmjs.org/package/fur-shapes
[bd_npm_shield_url]: http://img.shields.io/npm/v/fur-shapes.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Shapes for fur.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
-----

```bash
npm install fur-shapes --save
```

<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
----

```javascript
var furShapes = require('fur-shapes'),
    fs = require('fs');


var themeA = furShapes.a(256, 215, '#38E'),
    themeB = furShapes.b(512, 256, '#E00');


fs.writeFileSync('shape-01.svg', themeA);
fs.writeFileSync('shape-02.svg', themeB);
```
<!-- Section from "docs/readme/02.Usage.md.hbs" End -->

<!-- Section from "docs/readme/03.Examples.md.hbs" Start -->

<a name="section-docs-readme-03-examples-md"></a>
Examples
--------

| Theme | Image | Signature |
| ----- | ----- | --------- |
| **a** | <img src="./docs/examples/images/example-shape-a.png" height="40"> | `.a(256,256, #38E)` |
| **b** | <img src="./docs/examples/images/example-shape-b.png" height="40"> | `.a(256,256, #38E)` |
| **c** | <img src="./docs/examples/images/example-shape-c.png" height="40"> | `.a(256,256, #38E)` |
| **d** | <img src="./docs/examples/images/example-shape-d.png" height="40"> | `.a(256,256, #38E)` |
| **e** | <img src="./docs/examples/images/example-shape-e.png" height="40"> | `.a(256,256, #38E)` |
| **f** | <img src="./docs/examples/images/example-shape-f.png" height="40"> | `.a(256,256, #38E)` |
| **g** | <img src="./docs/examples/images/example-shape-g.png" height="40"> | `.a(256,256, #38E)` |
| **h** | <img src="./docs/examples/images/example-shape-h.png" height="40"> | `.a(256,256, #38E)` |
| **i** | <img src="./docs/examples/images/example-shape-i.png" height="40"> | `.a(256,256, #38E)` |

<!-- Section from "docs/readme/03.Examples.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/fur-repo/fur-shapes/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------


<!-- Links End -->
