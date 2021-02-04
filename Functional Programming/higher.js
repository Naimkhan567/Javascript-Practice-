function add(a, b) {
    return a+b
}
function manipulate(a, b, func) {
    var c = a + b
    var d = a - b
    function maltiply() {
        var m = func(a, b)
        return c*d*m
    }
    return maltiply
}
var multiply = manipulate(3, 4, add)
console.log(multiply())