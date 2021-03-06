/**
 * Docs:
 * qq.test('1234')               =>      false
 * qq.test('01234')              =>      false
 * qq.test('1234567890123')      =>      false
 * qq.test('12345')              =>      true
 * qq.test('12345678901')        =>      true
 */

/**
 * Spec:
 * 1. Required 5~12 characters, preset max length of 12.
 * 2. Can only be numbers.
 * 3. The first character can not be 0.
 */

/**
 * 规格：
 * 1、要求 5~12 位，先保留到 12 位。
 * 2、只能是数字。
 * 3、不能以 0 开头。
 */
export const $qq = /^[1-9]\d{4,11}$/
export const isQQ = (value) => {
  return $qq.test(value)
}
