// lodash 中的函数组合的方法 _.flowRight()
const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

// const f = _.flowRight(toUpper, first, reverse)

// 组合函数原理模拟
// const f = compose(toUpper, first, reverse)
// console.log(f(['one', 'two', 'three']))

// function compose (...args) {
//     return function (value) {
//         // reduce对数组中的每个元素去执行一个由我们提供的函数，并将其汇总成一个单个的结果。其参数是一个函数，函数接收两个参数
//         return args.reverse().reduce(function (acc, fn) {
//           return fn(acc)  
//         }, value)
//     }
// }

const compose = (...args) => value =>args.reverse().reduce((acc, fn) => fn(acc), value)

const f = compose(toUpper, first, reverse)
console.log(f(['one', 'two', 'three']))