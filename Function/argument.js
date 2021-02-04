// function add(a, b) {
//     var result = a + b
//     console.log(result)
// }
// add(10, 10)

// function sub(a, b) {
//     var result = a - b
//     console.log(result)
// }
// sub(10, 5)



// var arr1 = [1, 2, 3]
// var arr2 = [4, 5, 6]
// var arr3 = [7, 8, 9]


// var sum1 = 0
// for(i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i]
// }console.log(sum1)


// function sumOfArry(arr) {
//     var sum = 0
//     for(i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// sumOfArry(arr1)
// sumOfArry(arr2)
// sumOfArry(arr3)



function test() {
    console.log(arguments)
} 
test(10, 20)




function addAll() {
    var sum = 0
    for (i = 0; i < arguments.length; i++ ) {
        sum += arguments[i]
    }
    console.log(sum)
}


addAll(5, 6)


