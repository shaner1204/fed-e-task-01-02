// 柯里化案例

// 提取字符串中的空白
// ''.match(/\s+/g)

// 提取字符串中的数字
// ''.match(/\d+/g)

const _ = require('lodash')
// 提取字符串中的指定内容


// 利用柯里化,让参数不再重复,____就是让一个函数生成一个新的函数
// 给 curry 传递一个匿名函数,定义一个变量接收 curry 返回的结果
const match = _.curry(function (reg, str) {
    return str.match(reg)
})

// 通过 match 柯里化的函数生成具有特定功能的两个小的函数
const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)
// console.log(haveSpace('helloworld'))
// console.log(haveNumber('123abc'))

// 过滤数组中所有具有空白字符的数据
const filter = _.curry(function (func, array) {
    return array.filter(func)
})
console.log(filter(haveSpace, ['John Connor', 'John_Donne']))

// filter 生成了一个新函数
const findSpace = filter(haveSpace)

// 调用函数,来查找数组中带有空白字符的数据
console.log(findSpace(['John Connor', 'John_Donne']))

