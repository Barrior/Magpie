/**
 * Author: Barrior
 */

/**
 * doc:
 * qq.test('1234')               =>      false
 * qq.test('12345')              =>      true
 * qq.test('12345678901')        =>      true
 * qq.test('123456789012')       =>      false
 */

/**
 * 规则：
 * 要求 5~12 位（先保留到 12 位），不能以 0 开头，只能是数字
 */
export default /^[1-9]\d{4,11}$/;

