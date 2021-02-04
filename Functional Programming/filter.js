var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// var filterArr = arr.filter(function(value) {
//     return value % 2 == 1
// })

// console.log(filterArr)



function myFilter(arr, cb) {
    var newArr = []
    for (i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr))
        newArr.push(arr[i])
    }
    return newArr
}

var odd = myFilter(arr, function(value) {
    return value % 2 == 1
})

var even = myFilter(arr, function(value) {
    return value % 2 == 1
})

console.log(odd)
console.log(even)
console.log(myFilter(arr, function(value) {
    return value > 5
}))