/**
 * Docs:
 * tel.test('13100001111')       =>      true
 */

/**
 * Spec:
 * 要求 5~12 位（先保留到 12 位），不能以 0 开头，只能是数字
 */
export const $telHK = /^1[345789]\d{9}$/
export const isTelHK = (value) => {
  return $telHK.test(value)
}
