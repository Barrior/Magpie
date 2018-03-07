/**
 * Spec:
 * https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%A2%83%E5%86%85%E5%9C%B0%E5%8C%BA%E9%82%AE%E6%94%BF%E7%BC%96%E7%A0%81%E5%88%97%E8%A1%A8
 * 1、由六位数字组成的邮政编码。
 */
export const $postcodeCN = /^\d{6}$/
export const isPostcodeCN = (value) => {
  return $postcodeCN.test(value)
}
