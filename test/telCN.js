import test from 'ava'
import {isTelCN} from '../src/telCN'

test('telCN', (t) => {
  t.true(isTelCN(13100001111))
  t.true(isTelCN('13100001111'))
})
