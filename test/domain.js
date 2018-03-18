import test from 'ava'
import {isDomain} from '../src/domain'

test('isDomain', (t) => {
  /* Normal rules checkout */
  // Correct rules checkout
  t.true(isDomain('a.com'))
  t.true(isDomain('a.a.com'))
  t.true(isDomain('abc.abc.com'))
  t.true(isDomain('abc-12.de-34-56.com'))
  t.true(isDomain('abc-12.de-34-56.890-90.com'))

  // Errors rules checkout
  t.false(isDomain('com.'))
  t.false(isDomain('.com'))
  t.false(isDomain('a.com-'))
  t.false(isDomain('a.co-m'))
  t.false(isDomain('-a.com'))
  t.false(isDomain('a-.com'))
  t.false(isDomain('ab.-a.com'))
  t.false(isDomain('ab.a-.com'))

  t.false(isDomain('-ab.a.com'))
  t.false(isDomain('ab-.a.com'))

  /* Specific errors checkout */
  // Top-level domains that at least 2 characters.
  t.false(isDomain('a.c'))
  // Top-level domains can only be letters.
  t.false(isDomain('a.c2'))
  t.false(isDomain('a.c-'))
  t.false(isDomain('a.c-m'))

  // Length checkout
  // Each level domains that max character of 63.
  t.false(isDomain(`${'a'.repeat(64)}.com`))
  // Domains max length can not more than 253.
  t.false(isDomain(`${'a'.repeat(250)}.com`))
})
