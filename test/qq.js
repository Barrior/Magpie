import test from 'ava'
import {typesCheckout} from './helpers/types'
import {isQQ} from '../src/qq'

test('isQQ', (t) => {
  /* Common checkout function */
  typesCheckout(isQQ, t)

  /* Normal rules checkout */
  // Length checkout program
  for (let i = 0; i < 16; i++) {
    const str = `${i > 9 ? 1 : i}`.repeat(i)
    if (str.length < 5 || str.length > 12) {
      t.false(isQQ(str))
    } else {
      t.true(isQQ(str))
    }
  }

  // Length checkout manually
  t.false(isQQ('1234'))
  t.true(isQQ('123456789'))
  t.true(isQQ('1234567890'))
  t.true(isQQ('12345678911'))
  t.true(isQQ('123456789912'))
  t.false(isQQ('1234567899913'))

  /* Specific errors checkout */
  // The first character can not be zero.
  t.false(isQQ('0123456'))
  // Only numbers can be included.
  t.false(isQQ('12-45-6'))
})
