# Magpie
A validated JavaScript RegExp library.

# Usage
## Browser
```
<script src="magpie.js">
<script>
// 正则表达式
Magpie.$email

// 正则表达式衍生的方法
// 大部分情况应该是使用衍生的方法
Magpie.isEmail(a@b.c)                      // true

Magpie.$password
Magpie.$noPassword
Magpie.isPassword('123456')                // true
Magpie.isPassword('123456非英文字符')        // false
Magpie.formatPassword('123456非英文字符')    // 123456
</script>
```

## On-demand import
```
<script src="magpie/email.js">
<script src="magpie/password.js">
<script>
Magpie.$email
Magpie.isEmail(a@b.c)                      // true
Magpie.isPassword(123456)                  // true
</script>
```


## Node.js:
```
const Magpie = require('magpie')

Magpie.$email
Magpie.isEmail(a@b.c)                       // true
```

## On-demand import
```
const {isEmail, $email} = require('magpie/email')
const {isPassword, $password} = require('magpie/password')
```

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Copyright (c) 2018 Barrior Wei

