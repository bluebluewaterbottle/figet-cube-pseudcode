let _1234 = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    _1234 = randint(0, 5)
    if (_1234 == 1) {
        basic.showString("1")
    } else if (_1234 == 2) {
        basic.showString("2")
    } else if (_1234 == 3) {
        basic.showString("3")
    } else if (_1234 == 4) {
        basic.showString("4")
    } else if (_1234 == 5) {
        basic.showString("5")
    } else if (_1234 == 6) {
        basic.showString("6")
    } else if (_1234 == 7) {
        basic.showString("7")
    } else if (_1234 == 8) {
        basic.showString("8")
    } else if (_1234 == 9) {
        basic.showString("9")
    } else {
        basic.showString("10")
    }
})
basic.forever(function () {
	
})
