

// var createReact = function(width, height) {
//     return {
//         width: width,
//         height: height,


//         draw: function() {
//             console.log('I am reactangle')
//             this.printProperties()
//         },

//         printProperties: function() {
//             console.log('Show me width' + this.width)
//             console.log('show me height' + this.height)
//         }
//     }
// }
// var rect1 = createReact(10, 20)
// rect1.draw()
// var rect2 = createReact(30, 20)
// rect2.draw()




// var Rectangle = function(width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function() {
//         console.log('This is Rectangle')
//         this.printProperties()
//     }
//     this.printProperties = function() {
//         console.log('Show my width' + this.width)
//         console.log('Show my height' + this.height)
//     }
// }

// var rect3 = new Rectangle(30, 20) 
// rect3.draw()



// function myFunc(c, d) {
//     console.log(this)
//     console.log(this.a + this.b + c + d)
// }

// myFunc.call({a: 10, b: 20}, 10, 10)
// myFunc.apply({a:10, b:10}, [10, 10])

// var testBind = myFunc.bind({a:10, b:10})
// testBind(30, 30)


var Rectangle = function(width, height) {
    var position = {
        x: 50,
        y: 30
    }
    this.width = width
    this.height = height

    var printProperties = function() {
        console.log('Show my width ' + width)
        console.log('Show my height ' + height)
    }

    this.draw = function() {
        console.log('you are rectangle')
        printProperties()
        console.log('Position X = ' + position.x + ' Positon Y = ' + position.y)
    }

    Object.defineProperty(this, 'position', {
        get: function() {
            return position
        },
        set: function(value) {
            position = value
        }
    })

}

var rect4 = new Rectangle(10, 20)
rect4.draw()
rect4.position = {
    x: 400,
    y: 500
}
console.log(rect4.position)