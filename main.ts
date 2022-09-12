input.onButtonPressed(Button.A, function () {
	
})
DFRobotWiFiIoTUART.WIFISetup(
SerialPin.P8,
SerialPin.P12,
"summer_winds",
"6093066149"
)
DFRobotWiFiIoTUART.IFTTTConfigure("yourEvent", "yourKey")
let PERSON = 1
let DOG = 2
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
