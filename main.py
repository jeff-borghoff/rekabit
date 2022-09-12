def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

DFRobotWiFiIoTUART.wifi_setup(SerialPin.P8, SerialPin.P12, "summer_winds", "6093066149")
basic.pause(5000)
if True:
    pass
PERSON = 1
DOG = 2
basic.show_string(DFRobotWiFiIoTUART.http_get("https://www.google.com", 10000))
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)

def on_forever():
    basic.pause(1000)
    huskylens.request()
    if huskylens.is_appear(PERSON, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        basic.show_icon(IconNames.STICK_FIGURE)
    elif huskylens.is_appear(DOG, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        basic.show_icon(IconNames.GIRAFFE)
basic.forever(on_forever)
