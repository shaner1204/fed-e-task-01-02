// 1、高阶函数---函数作为参数

// function forEach(array, fn) {
//     for (let i = 0; i < array.length; i++) {
//         fn(array[i])
//     }
// }

// // 测试
// let arr = [1, 2, 3, 4, 5, 6]
// forEach(arr, function (item) {
//     console.log(item)
// })

// filter
// function filter (array, fn) {
//     let results = []
//     for (let i = 0; i < array.length; i++) {
//         if(fn(array[i])) {
//             results.push(array[i])
//         }
//     }
//     return results
// }

// // 测试
// let arr = [1, 2, 4, 5, 6, 8]
// let r = filter(arr, function (item) {
//     return item % 2 === 0
// })
// console.log(r, 'filter')


// 2、高阶函数---函数作为返回值（让一个函数生成一个函数）
// function makeFn () {
//     let msg = 'Hello function'
//     return function () {
//         console.log(msg)
//     }
// }
// // const fn = makeFn()
// // fn()
// makeFn()()

// once函数（只会执行一次）
// function once (fn) {
//     let done = false
//     return function () {
//         if (!done) {
//             done = true
//             console.log(arguments, 'arguments')
//             return fn.apply(this, arguments)
//         }
//     }
// }
// let pay = once(function (money) {
//     console.log(`支付：${money}`)
// })
// pay(5)
// pay(5)
// pay(5)


// 3、模拟常用高阶函数：map、every、some
// [3.1] map：数组中的一个方法，作用：是对数组中的每个元素进行遍历并处理，把处理的结果放到一个新数组中返回
// const map = (array, fn) => {
//     let results = []
//     for (let value of array) {
//         results.push(fn(value))
//     }
//     return results
// }
// // 测试
// let arr = [1, 2, 3, 4]
// arr = map(arr, v => v * v)
// console.log(arr, 'map')

// [3.2]every:判断数组中每个元素是否匹配指定的条件
// const every = (array, fn) => {
//     let result = true
//     for (let value of array) {
//         result = fn(value)
//         if(!result) {
//             break
//         }
//     }
//     return result
// }

// // 测试
// let arr = [3, 12, 14]
// let r = every(arr, v => v > 10)
// console.log(r, 'every')

// [3.3]some:数组中的元素是否有一个满足指定的条件
// const some = (array, fn) => {
//     let result = false
//     for (let value of array) {
//         result = fn(value)
//         if (result) {
//             break
//         }
//     }
//     return result
// }

// // 测试
// let arr = [1, 2, 3, 4, 5, 6, 8]
// let r = some(arr, v => v % 2 === 0)
// console.log(r, 'some')


// 4.闭包

// 柯里化


// 二、JS性能优化
// 1、内存管理
// 申请
// let obj = {}
// // 使用
// obj.name = 'ssss'
// // 释放
// obj = null

// 垃圾回收
// let obj = {name: 'aaa'}

// let ali = obj

// obj = null


// function objGroup(obj1, obj2) {
//     obj1.next = obj2
//     obj2.prev = obj2

//     return {
//         o1: obj1,
//         o2: obj2
//     }
// }
// let obj = objGroup({name: 'obj1'}, {name: 'obj2'})
// console.log(obj)

const cars = [
    {
        name: 'Ferrari FF',
        horsepower: 660,
        dollar_value: 100,
        in_stock: true
    },
    {
        name: 'bbb',
        horsepower: 660,
        dollar_value: 200,
        in_stock: true
    },
    {
        name: 'cccc',
        horsepower: 660,
        dollar_value: 300,
        in_stock: false
    }
]
const fp = require('lodash/fp')
// 代码题1：
// 练习1：使用函数组合 fp.flowRight()重新实现下面这个函数
// let isLastInStock = function (cars) {
//     // 获取最后一条数据
//     let last_car = fp.last(cars)
//     // 获取最后一条数据的 in_stock 属性值
//     return fp.prop('in_stock', last_car)
// }
// const last = fp.flowRight(fp.prop('in_stock'), fp.last)
// console.log(last(cars))

// 练习2：使用 fp.flowRight()、fp.prop() 和 fp.first() 获取第一个car 的 name
// const firstName = fp.flowRight(fp.prop('name'), fp.first)
// console.log(firstName(cars))

// 练习3：使用帮助函数 _average 重构 averageDollarValue，使用函数组合的方式实现
let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
}
let averageDollarValue = function (cars) {
    let dollar_values = fp.map(function(car) {
        return car.dollar_value
    }, cars)
    return _average(dollar_values)
}
// console.log(averageDollarValue(cars), '钱')

const average = fp.flowRight(_average, fp.map(fp.prop('dollar_value')))
console.log(average(cars), 'flowRight-----平均')

// 练习4：使用 flowRight 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串，把数组中的 name 转换为这种形式：例如： sanitizeName(["Hello World"]) => ["hello_world"]
let _underscore = fp.replace(/\W+/g, '_')
// console.log(_underscore("HelloWorld"))
// 无须改动，并在 sanitizeNames 中使用它
const sanitizeNames = fp.flowRight(_underscore, fp.toLower)
console.log(sanitizeNames(["Hello World"]))








