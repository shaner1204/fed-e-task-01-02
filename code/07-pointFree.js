// point free
// Hello World => hello_world
// 用到两个方法，一个是转换小写，一个是字符串替换的方法，把两个运算过程合成一个新的函数，在过程中不需要指明我们所需要的数据
const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)

console.log(f('Hello     World'))
