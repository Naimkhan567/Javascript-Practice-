var obj = {
    n : 10,
    a : 09
}

console.log('a' in obj)


for(var i in obj) {
    console.log(i)
    console.log(obj[i])
}