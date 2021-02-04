function add() {
    var sum = 0
    for (i = 0; i < arguments.length; i++ ) {
        sum += arguments[i]
    }
    return sum
}

var result = add(1, 2, 3)
console.log(result)

function person(name, email) {
    return {
        name: name,
        email: email
    }
}

var p = person('naim', 'naim@gmail.com')
console.log(p)


var sum= 0


