input.onButtonPressed(Button.A, function () {
    if (leds < 14 && leds >= 0) {
        leds += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (leds <= 14 && leds > 0) {
        leds += -1
    }
})
let leds = 0
let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
leds = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    `)
basic.forever(function () {
    strip.clear()
    for (let index = 0; index <= leds; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Violet))
    }
    strip.show()
    basic.pause(50)
})
