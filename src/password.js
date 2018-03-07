/* eslint-disable no-useless-escape */

/**
 * Spec:
 * 1、只能包含英文字符，数字。
 * 2、空字符只包含英文空格，不包含制表符等空字符。
 * 3、长度至少为 1。
 */
export const $password = /^[\w\040`~!@#$%^&*()\-+=\[\]{};:'"\\|,.<>/?]+$/
export const isPassword = (value) => {
  return $password.test(value)
}

/**
 * Spec:
 * 1、不是英文字符，数字。
 * 2、匹配除空格外的其他空字符，如制表符。
 * 3、替换所有符合规则的字符为空字符串。
 */
export const $noPassword = /[^\w\040`~!@#$%^&*()\-+=\[\]{};:'"\\|,.<>/?]*/g
export const formatPassword = (value) => {
  return value.replace($noPassword, '')
}
