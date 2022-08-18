input.onButtonPressed(Button.A, function () {
    esp8266.sendTelegramMessage("5708921032:AAHHC_NzXoT6WwvpR1BX2TFUXjSq2yTWJl8", "-739648072", "Watchdog Alert")
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
