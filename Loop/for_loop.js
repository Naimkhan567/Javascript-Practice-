for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0)
    console.log(i)
}


var sum = 0
for (var i = 1 ; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i))
    sum += i
    
}


var sum = 0

for (var i = 0; i <= 10; i++) {
    if ( i % 2 == 1) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i))
        sum += i
    }
}