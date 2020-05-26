// lodash 和 lodash/fp 模块中 map 方法的区别
// 接收函数的参数不一样：
// （1）lodash中map方法中接收的函数参数有三个：【第一个是我们要处理的元素，第二个是索引，第三个是数组】
// （2）lodash/fp中map方法中接收的函数参数只有一个，就是当前处理的元素
// const _ = require('lodash')
// console.log(_.map(['23', '8', '10'], parseInt))

// // parseInt('23', 0, array)
// // parseInt('8', 1, array)
// // parseInt('10', 2, array)

const fp = require('lodash/fp')

console.log(fp.map(parseInt, ['23', '8', '10']))

