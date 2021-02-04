var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for (i = 0; i < a.length; i++) {
    // console.log(a[i])
    a[i] += a[i] + 3
    console.log(a[i])
}

var sum = 0
for (i = 0; i < a.length; i++) {
    sum += a[i]
    console.log(sum)
}


var sum = 0
for (i = 0; i < a.length; i++) {
    if(a[i] % 2 == 1) {
        sum += a[i]
        console.log(sum)  
    }
    
}


var hum = 0
for (i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        hum += a[i]
        console.log(hum)
    }
}