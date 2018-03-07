import test from 'ava'
import {isPostcodeCN} from '../src/postcodeCN'

test('isPassword', (t) => {
  /* Normal rules checkout */
  t.true(isPostcodeCN(100000))
  t.true(isPostcodeCN(123456))
  t.true(isPostcodeCN('012345'))
  t.false(isPostcodeCN(12345))
  t.false(isPostcodeCN(1234567))

  t.true(isPostcodeCN('123456'))
})
