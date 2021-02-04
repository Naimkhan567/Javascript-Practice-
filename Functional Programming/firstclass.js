function mul(a, b) {
    return a*b
}

// 1
var multi = mul
console.log(multi(5, 5))

// 2
var arr = []
arr.push(mul)
console.log(arr[0](5, 5))

// 3
var obj = {
    sum: mul
}
console.log(obj.sum(10, 10))

// 4

setTimeout(function() {
    console.log('HI SI')
}, 1000)