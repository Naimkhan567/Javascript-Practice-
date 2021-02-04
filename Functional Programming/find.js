var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var fins =  arr.find(function(value) {
//     return value == 9
// })
// console.log(fins)

// var fin = arr.findIndex(function(value) {
//     return value == 9
// })
// console.log(fin)


function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            return arr[i]
        
        
        }
    }
}

var result = myFind(arr, function(value) {
    return value == 50
})
console.log(result)