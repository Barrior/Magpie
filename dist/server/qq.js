"use strict";

/**
 * Docs:
 * qq.test('1234')               =>      false
 * qq.test('01234')              =>      false
 * qq.test('1234567890123')      =>      false
 * qq.test('12345')              =>      true
 * qq.test('12345678901')        =>      true
 */

/**
 * Regular Spec:
 * 1. Required 5~12 characters(preset max length of 12), only Number type.
 * 2. The first character can not be 0.
 *
 * 要求 5~12 位（先保留到 12 位），不能以 0 开头，只能是数字
 */
var $qq = exports.$qq = /^[1-9]\d{4,11}$/;
var isQQ = exports.isQQ = function isQQ(value) {
  return $qq.test(value);
};