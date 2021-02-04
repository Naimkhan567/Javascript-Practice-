var arr = [0, -3, -1, 1, 3, 2, 4, 5, 7, 6, 9, 8]


arr.sort(function(a, b) {
    if (a > b) {
        return 1
        // return -1
    }else if (a < b) {
        return -1
        // return 1
    }else {
        return 0
    }
})

console.log(arr)



var arr2 = [
    {
        name : 'Naim',
        age : 22
    },
    {
        name : 'Akhi',
        age : 23
    },
    {
        name : 'Anni',
        age : 20
    },
    {
        name : 'Tisha',
        age : 18
    },
]


arr2.sort(function(a, b) {
    if (a.age > b.age) {
        return 1
    }else if (a.age < b.age) {
        return -1
    }else {
        0
    }
})
console.log(arr2)


var res1 = arr.every(function(value) {
    return value % 2 == 0
})
var res2 = arr.every(function(value) {
    return value <= 0
})
var res3 = arr.some(function(value) {
    return value % 2 == 1
})
var res4 = arr.some(function(value) {
    return value < 0
})
console.log(res1, res2, res3,res4)