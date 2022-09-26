input.onButtonPressed(Button.AB, function () {
    control.reset()
})
esp8266.init(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
esp8266.connectWiFi("", "")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
let PERSON = 1
let DOG = 2
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    basic.clearScreen()
    basic.pause(1000)
    huskylens.request()
    if (huskylens.isAppear(PERSON, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        esp8266.sendTelegramMessage("5708921032:AAHHC_NzXoT6WwvpR1BX2TFUXjSq2yTWJl8", "-739648072", "Dog")
        if (esp8266.isTelegramMessageSent()) {
            basic.showIcon(IconNames.Yes)
        }
        basic.showIcon(IconNames.StickFigure)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    } else if (huskylens.isAppear(DOG, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        esp8266.sendTelegramMessage("", "", "")
        if (esp8266.isTelegramMessageSent()) {
            basic.showIcon(IconNames.Yes)
        }
        basic.showIcon(IconNames.Giraffe)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
    }
})
