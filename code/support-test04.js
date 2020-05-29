// 练习4: 使用 Maybe 重写 ex4, 不要有法语句
const fp = require('lodash/fp')
const { Maybe, Container} = require('./support')

// let ex4 = function (n) {
//     if (n) {
//         return parseInt(n)
//     }
// }
// console.log(ex4(1), 'ex4')

let ex4 = Maybe.of(33).map(x => parseInt(x))
console.log(ex4, 'repeat')
