let Intensité = 0
function Bleu () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function mauve () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
basic.forever(function () {
    Intensité = pins.analogReadPin(AnalogPin.P0)
    if (Intensité < 500 && Intensité > 400) {
        mauve()
    } else if (Intensité < 400 && Intensité > 300) {
        Bleu()
    } else if (Intensité < 300 && Intensité > 200) {
        Rouge()
    } else if (Intensité < 200 && Intensité > 100) {
        Vert()
    } else if (Intensité < 100 && Intensité > 1) {
        blanc()
    }
})
