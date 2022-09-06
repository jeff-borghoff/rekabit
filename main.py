def on_button_pressed_a():
    esp8266.send_telegram_message("5708921032:AAHHC_NzXoT6WwvpR1BX2TFUXjSq2yTWJl8",
        "-739648072",
        "Watchdog Alert")
    esp8266.send_telegram_message("5687772713:AAH7ZAocx78-aLjlnqN2gAgEsX6mu_st-_Q",
        "-739648072",
        "Person Alert")
input.on_button_pressed(Button.A, on_button_pressed_a)

PERSON = 1
DOG = 2
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BAUD_RATE115200)
if esp8266.is_esp8266_initialized():
    basic.show_icon(IconNames.HAPPY)
else:
    basic.show_icon(IconNames.SAD)
esp8266.connect_wi_fi("summer_winds", "6093066149")
basic.show_string("Connecting")
if esp8266.is_wifi_connected():
    basic.show_icon(IconNames.HAPPY)
else:
    basic.show_icon(IconNames.SAD)
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)

def on_forever():
    basic.pause(1000)
    huskylens.request()
    if True:
        basic.show_number(huskylens.get_ids())
basic.forever(on_forever)
