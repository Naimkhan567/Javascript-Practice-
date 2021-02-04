for (; ;) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 9) {
        console.log('Naim Khan is winner')
        break
    } else {
        console.log('Game Over')
    }
}