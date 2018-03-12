/**
 * 规格：
 * 1、不区分大小写。
 */
export const $domain = /^[a-z\d](([a-z\d-]*)?[a-z\d])?(\.[a-z\d][a-z\d-]*[a-z\d]?)?\.[a-z]{2,6}$/i
export const isDomain = (value) => {
  return $domain.test(value)
}
