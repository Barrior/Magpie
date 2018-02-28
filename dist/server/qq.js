"use strict";

exports.__esModule = true;
var $qq = exports.$qq = /^[1-9]\d{4,11}$/;
var isQQ = exports.isQQ = function isQQ(value) {
    return $qq.test(value);
};