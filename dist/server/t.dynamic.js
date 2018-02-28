const {isPassword, formatPassword} = require('./password');

console.log(`"123你好" is password: ${isPassword('123你好')}`);
console.log(`format "123你好\\n0": ${formatPassword('123你好\n0')}`);