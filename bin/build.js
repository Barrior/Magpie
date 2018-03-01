#!/usr/bin/env node
const fs = require('fs')
const chalk = require('chalk')
const babel = require('babel-core')
const uglifyJS = require('uglify-js')
const jsBeautify = require('js-beautify').js_beautify
const utils = require('./utils')

// transform files to the "server" directory
function transformFiles() {
    const allFilename = fs.readdirSync(utils.resolveSrcPath())
    const filesQueue = new utils.Queue(allFilename)
    filesQueue.on('end', () => {
        const modules = [];
        allFilename.forEach((filename) => {
            modules.push(`require('./${filename}'),\n`)
        })
        const data = `\
        const modules = [\n${modules.join('')}];
        modules.forEach((obj) => {
            Object.keys(obj).forEach((key) => {
                exports[key] = obj[key];
            });
        });\
        `
        fs.writeFileSync(utils.resolveDistPath('server/magpie.js'), data)
        console.log(`${chalk.green('server/magpie.js')} create succeeded`)
    })

    const options = {
        env: {production: true}
    };

    (function transformStart() {
        filesQueue.dequeue((filename) => {
            const result = babel.transformFileSync(utils.resolveSrcPath(filename), options)
            const filePath = `server/${filename}`
            fs.writeFileSync(utils.resolveDistPath(filePath), utils.removeNeedlessLine(result.code))
            console.log(`${chalk.green(filePath)} create succeeded`)
            transformStart()
        })
    })()
}

transformFiles()

return;

// grenarater browser mode
const Magpie = require('../dist/server/magpie')

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
    if (err) throw err
    console.log(`"magpie.js" create succeeded`)
})

fs.writeFile('../dist/browser/magpie.min.js', uglifyJS.minify(data).code, (err) => {
    if (err) throw err
    console.log(`"magpie.min.js" create succeeded`)
})