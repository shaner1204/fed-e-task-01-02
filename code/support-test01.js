// 练习1: 使用 fp.add(x, y) 和 fp.map(f, x) 创建一个能让 functor 里的值增加的函数 ex1
const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')

let maybe = Maybe.of([5, 6, 1])
console.log(maybe, 'maybe')
let ex1 = maybe.map(x => fp.reduce(fp.add, 0, x))
console.log(ex1, 'ex1')