import test from 'ava'
import {isPostcodeCN} from '../src/postcodeCN'

test('isPassword', (t) => {
  /* Normal rules checkout */
  t.true(isPostcodeCN(100000))
  t.true(isPostcodeCN(123456))
  t.false(isPostcodeCN(12345))
  t.false(isPostcodeCN(1234567))

  t.true(isPostcodeCN('012345'))
  t.true(isPostcodeCN('123456'))

  for (let i = 0; i < 10; i++) {
    const str = '1'.repeat(i)
    if (i === 6) {
      t.true(isPostcodeCN(str))
    } else {
      t.false(isPostcodeCN(str))
    }
  }
})
