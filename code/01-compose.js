// 函数组合演示
// 函数接收多个类型的函数作为参数，并作为一个新函数返回，返回的函数要再接收一个参数(这个参数就作为输入，并处理这个输入，最后把它返回)
function compose (f, g) {
    return function (value) {
        return f(g(value))
    }
}


function reverse (array) {
    return array.reverse()
}

function first (array) {
    return array[0]
}


// 函数组合：可以让我们把多个函数组合生成一个新函数，在执行过程中，可以把参数输入给执行的第一个函数，第一个函数执行完成之后会返回一个执行结果，并把执行结果交给一下一个函数去处理，当最后一个函数执行完毕之后，会把最终的结果返回
const last = compose(first, reverse) 
console.log(last([1, 2, 3, 4]))