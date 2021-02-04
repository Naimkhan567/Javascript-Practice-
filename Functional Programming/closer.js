var a = 10

function akhi() {
    var n = 15
    return function() {
        console.log(n)
    }
}

var abc = akhi()
console.dir(abc)
