const path = require('path')
const EventEmitter = require('events')

exports.removeNeedlessLine = (code) => {
    return code.replace(/exports\.__esModule\s?=\s?true;\n/gi, '')
}

exports.resolveSrcPath = (filePath = '') => {
    return path.resolve(__dirname, `../src/${filePath}`)
}

exports.resolveDistPath = (filePath = '') => {
    return path.resolve(__dirname, `../dist/${filePath}`)
}

exports.Queue = class Queue {
    constructor (allFilename = []) {
        this.storage = Object.assign([], allFilename)
        this.emitter = new EventEmitter()
    }
    dequeue (fn) {
        const element = this.storage.shift()
        if (element) {
            fn(element)
        } else {
            this.emitter.emit('end')
        }
    }
    on (eventName, fn) {
        this.emitter.on(eventName, fn)
    }
}