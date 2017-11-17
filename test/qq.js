import test from 'ava';
import types from './helpers/types';
import qq from '../src/qq';

test('qq', (t) => {
    for (let i = 0; i < 16; i++) {
        const str = `${i > 9 ? 1 : i}`.repeat(i);
        if (str.length < 5 || str.length > 12) {
            t.false(qq.test(str));
        } else {
            t.true(qq.test(str));
        }
    }

    // The first character can not be zero.
    t.false(qq.test('0123456'));
    // Only numbers can be included.
    t.false(qq.test('12-45-6'));

    t.true(qq.test('123456789'));
    t.true(qq.test('1234567890'));
    t.true(qq.test('123456780901'));

    // Symbol type should throw an error,
    // other types should return false.
    types.forEach((type) => {
        const value = type.value;
        if (typeof value === 'symbol') {
            t.throws(() => {
                t.false(qq.test(value));
            });
        } else {
            t.false(qq.test(value));
        }
    });
});
