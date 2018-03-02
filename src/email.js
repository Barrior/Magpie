/**
 * tel.email('barrior@qq.com')     =>     true
 * tel.email('b@qq.com.cn')        =>     true
 * tel.email('-@qq.com')           =>     false
 */
export const $email = /^[a-z\d](([\w-]*)?[a-z\d])?@[a-z\d](([a-z\d-]*)?[a-z\d])?(\.[a-z\d]{2,6})*$/i
export const isEmail = (value) => {
    return $email.test(value)
}