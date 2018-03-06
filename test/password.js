import test from 'ava'
import {isPassword, formatPassword} from '../src/password'

const alphabet = []
for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i), String.fromCharCode(i).toLowerCase())
}
const correctPassword = `${alphabet.join('')}\`~!@#$%^&*()-_=+[]{};:'"\\|,.<>/? 0123456789`

// Specific space symbol
const symbols = ['\n', '\r', '\t', '\f', '\v', '\b']

test('isPassword', (t) => {
  /* Normal rules checkout */
  t.true(isPassword(correctPassword))
  t.true(isPassword('00 ^&^*&%*&(*)  00'))
  t.true(isPassword('0'))
  t.true(isPassword(' '))
  t.true(isPassword('  '))

  /* Specific errors checkout */
  symbols.forEach((symbol) => {
    t.false(isPassword(symbol))
  })

  // Not English character
  const languages = [
    '中文', '￥', '日本語テキストテスト', '일본어',
    'Японский текстовый тест', 'اختبار النص الياباني'
  ]
  languages.forEach((language) => {
    t.false(isPassword(language))
  })

  // At least one character
  t.false(isPassword(''))
})

test('formatPassword', (t) => {
  /* Normal rules checkout */
  t.is(formatPassword(correctPassword), correctPassword)
  symbols.forEach((symbol) => {
    t.is(formatPassword(symbol), '')
  })
  t.is(formatPassword('123中文'), '123')
  t.is(formatPassword('123 中 文 456￥'), '123   456')
})
