'use strict';

/**
 * 规则：
 * 无非英文字符、数字的输入
 */
var $password = exports.$password = /^[\w\s`~!@#\$%\^&\*\(\)\-\+=\\\|\[\]\{\};:\'\",\.<>/\?]+$/;
var isPassword = exports.isPassword = function isPassword(value) {
    return $password.test(value);
};

var $noPassword = exports.$noPassword = /[^[\w\s`~!@#\$%\^&\*\(\)\-\+=\\\|\[\]\{\};:\'\",\.<>/\?]]*/g;
var formatPassword = exports.formatPassword = function formatPassword(value) {
    return value.replace($noPassword, '');
};