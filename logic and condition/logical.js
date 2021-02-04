var a = 20
var b = 10
var c = 50
var d = 40


if (a > b  && c > d) {
    console.log('getter')
}
if (a > b || c < d) {
    console.log('getter')
}
var c = a > b
console.log(!c)