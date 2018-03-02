import test from 'ava'
import types from './helpers/types'
import {isTelCN} from '../src/telCN'

test('telCN', (t) => {
    t.true(isTelCN(13100001111))
    t.true(isTelCN('13100001111'))
})