/**
 * Docs:
 * tel.test('1310000111')        =>      false
 * tel.test('131000011112')      =>      false
 * tel.test('03100001111')       =>      false
 * tel.test('13100001111')       =>      true
 * 第二位为 `345789` 的 `11` 位手机号都返回 `true`
 */

/**
 * Regular Spec:
 * https://baike.baidu.com/item/%E6%89%8B%E6%9C%BA%E5%8F%B7%E7%A0%81/1417348?fr=aladdin
 * 采用宽松模式，只匹配前两位的正确格式
 */
export const $telCN = /^1[345789]\d{9}$/
export const isTelCN = (value) => {
  return $telCN.test(value)
}
