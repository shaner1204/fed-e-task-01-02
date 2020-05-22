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






