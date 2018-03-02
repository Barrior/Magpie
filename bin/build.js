#!/usr/bin/env node
const fs = require('fs')
const chalk = require('chalk')
const babel = require('babel-core')
const uglifyJS = require('uglify-js')
const jsBeautify = require('js-beautify').js_beautify
const shell = require('shelljs')
const utils = require('./utils')

const allFilename = fs.readdirSync(utils.resolveSrcPath())

function clearUpDistDir() {
    shell.rm('-rf', utils.resolveDistPath())

    const directories = []
    ;['', 'browser', 'server'].forEach((dirName) => {
        directories.push(utils.resolveDistPath(dirName))
    })

    shell.mkdir('-p', directories)
}

// transform files to the "server" directory
function transformFilesToServerDir() {
    const filesQueue = new utils.Queue(allFilename)
    filesQueue.on('end', () => {
        const modules = [];
        allFilename.forEach((filename) => {
            modules.push(`require('./${filename}'),\n`)
        })
        const data = `
        const modules = [\n${modules.join('')}];
        modules.forEach((obj) => {
            Object.keys(obj).forEach((key) => {
                exports[key] = obj[key];
            });
        });
        `
        fs.writeFileSync(utils.resolveDistPath('server/magpie.js'), jsBeautify(data))
        console.log(`${chalk.green('server/magpie.js')} create succeeded\n`)
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

// generate "browser" directory files
function transformFilesToBrowserDir() {
    const template = `\
    +function () {
        if (!window.Magpie) window.Magpie = {};\n
        {{content}}
    }();\
    `

    ;['magpie.js'].concat(allFilename).forEach((filename) => {
        const obj = require(utils.resolveDistPath(`server/${filename}`))
        const content = []

        Object.keys(obj).forEach((key) => {
            content.push(`var ${key} = Magpie.${key} = ${obj[key]}\n`)
        })

        const data = template.replace(/{{content}}/gi, content.join(''))
        fs.writeFileSync(utils.resolveDistPath(`browser/${filename}`), uglifyJS.minify(data).code)
        console.log(`${chalk.green(`browser/${filename}`)} create succeeded`)
    })
}

clearUpDistDir()
transformFilesToServerDir()
transformFilesToBrowserDir()

