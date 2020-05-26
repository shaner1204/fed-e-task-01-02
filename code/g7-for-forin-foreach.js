var arrList = new Array(1, 2, 3, 4, 5)

// 推荐foreach
arrList.forEach(function(item) {
    console.log(item)
})

// 其次推荐优化之后的for
for(var i = arrList.length; i; i--) {
    console.log(arrList[i])
}

// 最后再推荐for in
for (var i in arrList) {
    console.log(arrList[i])
}