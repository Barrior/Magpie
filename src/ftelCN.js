export const $ftelCN = /^[1-9]\d{0,3}-\d{3}-\d{8}$/
export const isFtelCN = (value) => {
  return $ftelCN.test(value)
}
