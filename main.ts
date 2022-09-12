input.onButtonPressed(Button.A, function () {
	
})
let PERSON = 1
let DOG = 2
if (true) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
basic.showString("Connecting")
if (true) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.forever(function () {
    basic.pause(1000)
    huskylens.request()
    if (huskylens.isAppear(PERSON, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.StickFigure)
    } else if (huskylens.isAppear(DOG, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Giraffe)
    }
})
