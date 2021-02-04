let add = (a, b) => a + b

console.log(add(10, 10))

let sum = x => x*x
console.log(sum(10))

let obj = {
    name: 'Naim Khan',
    print: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`)
        },2000)
    }
}
obj.print()