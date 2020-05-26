// Functor 函子
// class Container {
//     constructor(value) {
//         // 函子中要维护一个值 ，这个值不对外公布
//         this._value = value
//     }
//     // 还要对外提供一个map方法，map方法要接收一个处理值的函数，那我们调用map方法时，会调用fn去处理这个值，并且把处理的结果传给一个新的函子，由新的函子保存
//     map (fn) {
//         return new Container(fn(this._value))
//     }
// }

// // 创建一个函子的对象
// let r = new Container(5)
//     .map(x => x + 1)
//     .map(x => x * x)

//     console.log(r)

class Container {
    static of (value) {
        return new Container(value)
    }
    constructor(value) {
        // 函子中要维护一个值 ，这个值不对外公布
        this._value = value
    }
    map (fn) {
        return Container.of(fn(this._value))
    }
}

// let r = Container.of(5)
//             .map(x => x + 2)
//             .map(x => x * x)
// console.log(r)

// 演示 null undefined 的问题
Container.of(null)
    .map(x => x.toUpperCase())