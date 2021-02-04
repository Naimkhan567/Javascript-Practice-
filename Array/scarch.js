var arr = [10, 20, 30, 40, 50, 60]

var found = 15
var isFound = false

for (i = 0; i < arr.length; i++) {
    if(arr[i] == found) {
        console.log('data is found  in index ' + i)
        isFound = true
        break
    }
}
if (!isFound) {
    console.log('data is not found')
}