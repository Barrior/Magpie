/**
 * Author: Barrior
 */

/**
 * Docs:
 * tel.test('1310000111')        =>      false
 * tel.test('131000011112')      =>      false
 * tel.test('03100001111')       =>      false
 * tel.test('13100001111')       =>      true
 */

/**
 * Regular Spec:
 * 11位
 * https://baike.baidu.com/item/%E6%89%8B%E6%9C%BA%E5%8F%B7%E7%A0%81/1417348?fr=aladdin
 */
export default /^1[345789]\d{9}$/;