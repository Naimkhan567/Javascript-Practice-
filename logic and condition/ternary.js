var a = 10
var str = ''
if (a % 2 == 0) {
    str = 'even'
}
if (a % 2 == 1) {
    str = 'odd'
}
console.log(str)


var result = a % 2 == 0 ? 'even' : 'odd'
console.log(result)