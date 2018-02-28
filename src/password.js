/**
 * 规则：
 * 无非英文字符、数字的输入
 */
export const $password = /^[\w\s`~!@#\$%\^&\*\(\)\-\+=\\\|\[\]\{\};:\'\",\.<>/\?]+$/;
export const isPassword = (value) => {
    return $password.test(value);
};

export const $noPassword = /[^[\w\s`~!@#\$%\^&\*\(\)\-\+=\\\|\[\]\{\};:\'\",\.<>/\?]]*/g;
export const formatPassword = (value) => {
    return value.replace($noPassword, '');
};