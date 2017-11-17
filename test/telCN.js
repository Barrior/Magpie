import test from 'ava';
import types from './helpers/types';
import tel from '../src/tel';

test('tel', (t) => {
    t.true(tel.test('13100001111'));
});