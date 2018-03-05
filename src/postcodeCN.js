export const $postcodeCN = /^[1-9]\d{5}$/
export const isPostcodeCN = (value) => {
  return $postcodeCN.test(value)
}
