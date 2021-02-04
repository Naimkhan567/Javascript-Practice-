var isRunning = true

while(isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 9) {
        console.log('Naim Khan is winner')
        isRunning = false
    } else {
        console.log('Game Over')
    }
}