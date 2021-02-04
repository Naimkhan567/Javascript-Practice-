function someThing(geet, name) {
    function say() {
        console.log(geet, name)
    }
    say()
}

someThing('Assalamuyailaikum', 'world')


function thing(geet, name) {
    function getFirstName() {
        if(name) {
            return name.split(' ')[1]
        }else {
            return ' '
        }
    }
    var message = geet + ' ' + getFirstName()
    console.log(message)
}

thing('Asslamuyailaikum', 'Bibi Akhi')
