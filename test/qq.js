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

    // 其他类型返回 false
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
