// tests go here; this will not be compiled when this package is used as an extension.

// Read infrared remote control key value loop function.
mShield.irCallBack(function () {
    // Judge the received key value
    if (mShield.irButton(mShield.MshieldIrButtons.Number1)) {

        // The four LED lights of the expansion board are on for 1 second.
        mShield.setLed(mShield.LEDs.LED20, mShield.LedState.ON)
        mShield.setLed(mShield.LEDs.LED40, mShield.LedState.ON)
        mShield.setLed(mShield.LEDs.LED60, mShield.LedState.ON)
        mShield.setLed(mShield.LEDs.LED80, mShield.LedState.ON)
        basic.pause(1000)
    }
    if (mShield.irButton(mShield.MshieldIrButtons.Number2)) {

        // The four LED lights of the expansion board are off for 1 second.
        mShield.turnOffAllLeds()
        basic.pause(1000)
    }
})

// The speed compensation value of the 2 motors is set to 0.
mShield.motorsAdjustment(0, 0)

basic.forever(function () {
    // 2 motors are running forward for 1 second.
    mShield.setMotorsDirectionSpeed(mShield.Motors.AllMotors, mShield.MotorsDirection.CC, 100)
    basic.pause(1000)

    // The 2 motors are stopped for 1 second.
    mShield.setMotorsDirectionSpeed(mShield.Motors.AllMotors, mShield.MotorsDirection.CC, 0)
    basic.pause(1000)

    // The 2 motors are reversed for 1 second.
    mShield.setMotorsDirectionSpeed(mShield.Motors.AllMotors, mShield.MotorsDirection.CCW, 100)
    basic.pause(1000)

    // The 2 motors are stopped for 1 second.
    mShield.setMotorsDirectionSpeed(mShield.Motors.AllMotors, mShield.MotorsDirection.CCW, 0)
    basic.pause(1000)

    // Set the S1--S4 interface of the expansion board to PWM mode.
    mShield.setS1ToS4Type(mShield.S1ToS4Type.PWM)
    basic.pause(1000)

    // S1--S4 PWM interface output 200 value, 100% duty cycle.
    mShield.extendPwmControl(mShield.PwmIndex.S1, 200)
    mShield.extendPwmControl(mShield.PwmIndex.S2, 200)
    mShield.extendPwmControl(mShield.PwmIndex.S3, 200)
    mShield.extendPwmControl(mShield.PwmIndex.S4, 200)
    basic.pause(1000)

    // S1--S4 PWM interface output 0 value, 0% duty cycle.
    mShield.extendPwmControl(mShield.PwmIndex.S1, 0)
    mShield.extendPwmControl(mShield.PwmIndex.S2, 0)
    mShield.extendPwmControl(mShield.PwmIndex.S3, 0)
    mShield.extendPwmControl(mShield.PwmIndex.S4, 0)
    basic.pause(1000)

    // Set the S1--S4 interface of the expansion board to drive servo mode.
    mShield.setS1ToS4Type(mShield.S1ToS4Type.Servo)
    basic.pause(1000)

    // The servo of S1--S4 interface is turned to 180 degrees.
    mShield.extendServoControl(mShield.ServoIndex.S1, mShield.ServoType.Servo180, 0)
    mShield.extendServoControl(mShield.ServoIndex.S2, mShield.ServoType.Servo180, 0)
    mShield.extendServoControl(mShield.ServoIndex.S3, mShield.ServoType.Servo180, 0)
    mShield.extendServoControl(mShield.ServoIndex.S4, mShield.ServoType.Servo180, 0)
    basic.pause(1000)

    // The servo of S1--S4 interface is turned to 0 degrees.
    mShield.extendServoControl(mShield.ServoIndex.S1, mShield.ServoType.Servo180, 180)
    mShield.extendServoControl(mShield.ServoIndex.S2, mShield.ServoType.Servo180, 180)
    mShield.extendServoControl(mShield.ServoIndex.S3, mShield.ServoType.Servo180, 180)
    mShield.extendServoControl(mShield.ServoIndex.S4, mShield.ServoType.Servo180, 180)
    basic.pause(1000)

    // Set the S1--S4 interface of the expansion board to drive servo mode.
    mShield.setS1ToS4Type(mShield.S1ToS4Type.Servo)
    basic.pause(1000)

    // 360-degree servo maximum speed forward rotation.
    mShield.continuousServoControl(mShield.ServoIndex.S1, 100)
    basic.pause(1000)

    // 360-degree servo stop.
    mShield.continuousServoControl(mShield.ServoIndex.S1, 0)
    basic.pause(1000)

    // 360-degree servo maximum speed reversal.
    mShield.continuousServoControl(mShield.ServoIndex.S1, -100)
    basic.pause(1000)

    // 360-degree servo stop.
    mShield.continuousServoControl(mShield.ServoIndex.S1, 0)
    basic.pause(1000)

    // Read the power level of the 3-connected AA battery.
    basic.showNumber(mShield.batteryLevel(mShield.BatteryType.AA3))
    basic.pause(1000)

    // Read the extension board firmware version.
    basic.showString(mShield.readVersions())
    basic.pause(1000)
})