/**
 * Spec:
 * 1. Can only contain English characters, numbers and spaces.
 * 2. At least one character.
 */

/**
 * 规格：
 * 1、只能包含英文字符，数字，空格。
 * 2、长度至少为 1。
 */
export const $password = /^[\w\040`~!@#$%^&*()\-+=[\]{};:'"\\|,.<>/?]+$/
export const isPassword = (value) => {
  return $password.test(value)
}

/**
 * Spec:
 * 1. Not English characters, numbers and spaces.
 * 2. Matches blank characters that except spaces, such as tabs.
 * 3. Replace all characters that match the rule with an empty string.
 */

/**
 * 规格：
 * 1、不是英文字符，数字。
 * 2、匹配除空格外的其他空字符，如制表符。
 * 3、替换所有符合规则的字符为空字符串。
 */
export const $noPassword = /[^\w\040`~!@#$%^&*()\-+=[\]{};:'"\\|,.<>/?]*/g
export const formatPassword = (value) => {
  return value.replace($noPassword, '')
}
