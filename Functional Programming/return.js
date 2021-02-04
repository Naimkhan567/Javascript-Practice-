function greet(mes) {
    function greeting(name) {
        return mes + ', ' + name
    }
    return greeting
}

var gm = greet('Good Morning')
var n = greet('Good Night')
var mess = gm('Naim')
console.log(mess)
console.log(n('Akhi'))


function base(b) {
    return function(n) {
        for (i = 0; i < b; i++) {
           result *= n
        }
        return result
    }
}

var bes10 = base(10)
console.log(bes10(2))