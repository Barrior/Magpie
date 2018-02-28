# Magpie
A validated JavaScript RegExp library.

# Usage
## Browser
```
<script src="magpie.all.js">
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

## Dynamic import
```
<script src="magpie.email.js">
<script>
Magpie.$email
Magpie.isEmail(a@b.c)                      // true
</script>
```


## Node.js:
```
const Magpie = require('magpie')

Magpie.$email
Magpie.isEmail(a@b.c)                       // true
```

## Dynamic import
```
const {isEmail, $email} = require('magpie/email')
```


