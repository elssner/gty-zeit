let a: number[] = []
let list: number[] = []
let d = 0
let rest = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    a = BitArray(22)
    bit.plot25LEDn(0, a)
})
function BitArray (dezParameter: number) {
    list = []
    d = Math.trunc(dezParameter)
    while (d > 0) {
        rest = d % 2
        list.push(rest)
        d = Math.trunc(d / 2)
    }
    return list
}
