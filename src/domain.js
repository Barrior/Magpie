/**
 * 规格：
 * https://en.wikipedia.org/wiki/Domain_name
 *
 * 1、域名由英文字母（不区分大小写）、数字、"-"（中横线）构成。
 * 2、每级域名首尾只能为英文字母，数字。
 * 3、每一级域名最小长度为 1 个字符，最大长度为 63 个字符，且域名总长度不能超过 253 个字符。
 * 4、预设顶级域名只能为英文字母，且最小长度为 2。
 */
export const $domain = /^([a-z\d](([a-z\d-]*)?[a-z\d])?(\.[a-z\d](([a-z\d-]*)?[a-z\d])?)?\.[a-z]{2,63}){4,253}$/i
export const isDomain = (value) => {
  return $domain.test(value)
}
