/**
 * Docs:
 * telCN.test('1310000111')        =>      false
 * telCN.test('131000011112')      =>      false
 * telCN.test('03100001111')       =>      false
 * telCN.test('13100001111')       =>      true
 */

/**
 * 规格：
 * https://baike.baidu.com/item/%E6%89%8B%E6%9C%BA%E5%8F%B7%E7%A0%81
 *
 * 采用宽松模式，只匹配前两位的正确格式
 * 1、11 位数字。
 * 2、第一个数字为 1。
 * 3、第二位数字为 345789 其中之一。
 */
export const $telCN = /^1[345789]\d{9}$/
export const isTelCN = (value) => {
  return $telCN.test(value)
}

/**
 * 规格：
 * https://zh.wikipedia.org/wiki/%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E5%88%86%E7%B1%BB%E8%AE%A1%E5%88%92
 * https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%94%B5%E8%AF%9D%E5%8C%BA%E5%8F%B7
 */
export const $fixedTelCN = /^[1-9]\d{0,3}-\d{3}-\d{8}$/
export const isFixedTelCN = (value) => {
  return $fixedTelCN.test(value)
}
