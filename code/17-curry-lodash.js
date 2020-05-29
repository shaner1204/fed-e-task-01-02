// lodash 中的 curry 基本使用
const _ = require('lodash')

// curyy方法需要一个函数式的参数
// 柯里化可以帮助我们把任意多参数的函数转换为一元函数
function getSum (a, b, c) {
    return a + b + c
}

const curried = _.curry(getSum)

// 当调用curry时,会返回一个柯里化的函数,这个函数调用时,可以传递 getSum 所需的所有参数,当传递了 getSum 所需的所有参数时,会立即调用并返回结果
console.log(curried(1, 2, 3))

// 当调用curry时,如果传递部分参数,会返回一个新函数,并且等待去接收getSum中其它的剩余参数
console.log(curried(1)(2, 3))

console.log(curried(1, 2)(3))
