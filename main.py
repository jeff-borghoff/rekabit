esp8266.init(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BAUD_RATE115200)
if esp8266.is_esp8266_initialized():
    basic.show_icon(IconNames.YES)
else:
    basic.show_icon(IconNames.NO)
esp8266.connect_wi_fi("", "")
if esp8266.is_wifi_connected():
    basic.show_icon(IconNames.YES)
else:
    basic.show_icon(IconNames.NO)
PERSON = 1
DOG = 2
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
music.set_built_in_speaker_enabled(True)

def on_forever():
    basic.clear_screen()
    basic.pause(1000)
    huskylens.request()
    if huskylens.is_appear(PERSON, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        esp8266.send_telegram_message("AAHHC_NzXoT6WwvpR1BX2TFUXjSq2yTWJl8", "", "")
        if esp8266.is_telegram_message_sent():
            basic.show_icon(IconNames.YES)
        basic.show_icon(IconNames.STICK_FIGURE)
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.giggle),
            SoundExpressionPlayMode.UNTIL_DONE)
    elif huskylens.is_appear(DOG, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        esp8266.send_telegram_message("", "", "")
        if esp8266.is_telegram_message_sent():
            basic.show_icon(IconNames.YES)
        basic.show_icon(IconNames.GIRAFFE)
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.twinkle),
            SoundExpressionPlayMode.UNTIL_DONE)
basic.forever(on_forever)
