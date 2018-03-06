import test from 'ava'
import {typesCheckout} from './helpers/types'
import {isTelCN} from '../src/telCN'

test('isTelCN', (t) => {
  /* Common checkout function */
  typesCheckout(isTelCN, t)

  /* Normal rules checkout */
  t.true(isTelCN(13011112222))
  t.true(isTelCN(13100001111))
  t.true(isTelCN('13100001111'))
  t.true(isTelCN('13100001110'))

  // Length error
  t.false(isTelCN(131456789))
  t.false(isTelCN(1314567890))
  t.false(isTelCN(131456789012))

  const correctSecondNumber = [3, 4, 5, 7, 8, 9]
  correctSecondNumber.forEach((number) => {
    t.true(isTelCN(`1${number}122223333`))
  })
  const errorSecondNumber = [0, 1, 2, 6]
  errorSecondNumber.forEach((number) => {
    t.false(isTelCN(`1${number}122223333`))
  })

  /* Specific errors checkout */
  // The first character must be 1.
  const errorFirstNumber = [0, 2, 3, 4, 5, 6, 7, 8, 9]
  errorFirstNumber.forEach((number) => {
    t.false(isTelCN(`${number}3122223333`))
  })

  // Only numbers can be included.
  t.false(isTelCN('13-22223333'))
  t.false(isTelCN('131+2223333'))
})
