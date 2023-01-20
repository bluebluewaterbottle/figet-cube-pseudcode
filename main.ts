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
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Sad)
    }
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
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello!")
    basic.showString("How was your day?")
    basic.showString("I hope it was good.")
    basic.showString("Bye!")
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 100; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
let _1234 = 0
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
