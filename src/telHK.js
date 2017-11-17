/**
 * Author: Barrior
 */

/**
 * Docs:
 * tel.test('13100001111')       =>      true
 */

/**
 * Regular Spec:
 * 要求 5~12 位（先保留到 12 位），不能以 0 开头，只能是数字
 */
export default /^1[34578]\d{9}$/