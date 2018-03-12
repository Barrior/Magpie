import test from 'ava'
import {isDomain} from '../src/domain'

test('isDomain', (t) => {
  /* Normal rules checkout */
  t.true(isDomain('a.com'))
  t.true(isDomain('a.a.com'))
  t.true(isDomain('abc.abc.org'))
  t.true(isDomain('abc-12.de-34-56.com'))
  t.true(isDomain('abc-12.de-34-56.890-90.com'))

  t.false(isDomain('a.com-'))
  t.false(isDomain('a.co-m'))
  t.false(isDomain('-a.com'))
  t.false(isDomain('a-.com'))
  t.false(isDomain('ab.-a.com'))
  t.false(isDomain('ab.a-.com'))

  t.false(isDomain('-ab.a.com'))
  t.false(isDomain('ab-.a.com'))
})
