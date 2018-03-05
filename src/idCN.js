export const $idCN = /^[1-8]{2}\d{4}[12][089]\d{2}[01]\d[0-3]\d{4}[\dX]$/i
export const isIDCN = (value) => {
  return $idCN.test(value)
}
