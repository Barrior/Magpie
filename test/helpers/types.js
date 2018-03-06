export const types = [
  {type: '[object Function]', value: () => {}},
  {type: '[object Object]', value: {}},
  {type: '[object Array]', value: []},
  {type: '[object String]', value: ''},
  {type: '[object Boolean]', value: true},
  {type: '[object Boolean]', value: false},
  {type: '[object Number]', value: -1},
  {type: '[object Number]', value: 0},
  {type: '[object Number]', value: 1},
  {type: '[object Null]', value: null},
  {type: '[object Undefined]', value: undefined},
  {type: '[object Symbol]', value: Symbol('object Symbol')}
]

/* Types checkout */
// Symbol type should throw an error,
// other types(excluded Number and String) should return false.
export const typesCheckout = (method, t) => {
  types.forEach((type) => {
    const {value, type: typeString} = type
    if (typeString === '[object Symbol]') {
      t.throws(() => {
        method(value)
      })
    } else if (typeString !== '[object Number]' || typeString !== '[object String]') {
      t.false(method(value))
    }
  })
}
