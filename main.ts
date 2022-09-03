input.onButtonPressed(Button.A, function () {
    esp8266.sendTelegramMessage("5708921032:AAHHC_NzXoT6WwvpR1BX2TFUXjSq2yTWJl8", "-739648072", "Watchdog Alert")
    esp8266.sendTelegramMessage("5687772713:AAH7ZAocx78-aLjlnqN2gAgEsX6mu_st-_Q", "-739648072", "Person Alert")
})
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
esp8266.connectWiFi("summer_winds", "6093066149")
basic.showString("Connecting")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.forever(function () {
    basic.pause(1000)
    huskylens.request()
    basic.showNumber(huskylens.getIds())
})
