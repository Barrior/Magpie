+function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Magpie = factory();
    }
}(typeof window !== 'undefined' ? window : this, function () {
    return {
        qq: /^[1-9]\d{4,11}$/,
        telCN: /^1[345789]\d{9}$/
    };
});