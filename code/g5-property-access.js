function Person () {
    this.name = 'icoder'
    this.age = 18
    this.getAge = function () {
        return this.age
    }
}
const p2 = new Person()
const a = p1.getAge()


// 推荐直接采取对象实例去访问属性
function Person () {
    this.name = 'icoder'
    this.age = 18
    this.getAge = function () {
        return this.age
    }
}
const p2 = new Person()
const b = p2.age