#!/usr/bin/env node
const fs = require('fs');
const UglifyJS = require('uglify-js');
const jsBeautify = require('js-beautify').js_beautify;
const Magpie = require('../dist/server/magpie');

const content = []
Object.keys(Magpie).forEach((key) => {
    content.push(`var ${key} = Magpie.${key} = ${Magpie[key]}\n`)
})

const data = `\
+function () {
    if (!window.Magpie) window.Magpie = {};\n
    ${content.join('')}
}();\
`

fs.writeFile('../dist/browser/magpie.js', jsBeautify(data), (err) => {
    if (err) throw err;
    console.log(`"magpie.js" create succeeded`);
});

fs.writeFile('../dist/browser/magpie.min.js', UglifyJS.minify(data).code, (err) => {
    if (err) throw err;
    console.log(`"magpie.min.js" create succeeded`);
});