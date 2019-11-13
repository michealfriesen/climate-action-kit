{
    // Motors
    basic.pause(1000)
    basic.pause(1000)
    motor.turnLeft(50)
    basic.pause(1000)
    motor.turnRight(50)
    basic.pause(1000)
    motor.setPowers(MotorPower.OFF)

    //Touch sensor and moisture sensor
    basic.forever(function () {
        if (touch.getTouch(DigitalPin.P1)) {
            soil.displayMoisture(AnalogPin.P0)
      } else {
         basic.showLeds(`
             . . . . .
             . . . . .
             . . . . .
             . . . . .
             . . . . .
             `)
        }
    })

   
    // // Servos
    //servos.resetServos()
    //basic.pause(1000)
    //servos.turnLeftServo(80)
    //servos.turnRightServo(80)
    //basic.pause(1000)
    //servos.turnLeftServo(-80)
    //servos.turnRightServo(-80)
    //basic.pause(1000)
}
