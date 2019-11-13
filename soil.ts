enum Mlevel {
    //% block="Very Wet"
    VERY_WET = 500,
    //% block="Wet"
    WET = 200,
    //% block="Dry"
    DRY = 100,
    //% block="Very Dry"
    VERY_DRY = 0
}

//% weight=13 color=#ff6700 icon=""
namespace soil {
    /**
     * Returns the value of the moisture sensor at a specific pin.
     */
    //% block="moisture level at pin $pin"
    export function getMoisture(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }


    /**
     * Runs a specific function if the moisture value is below the selected moisture level
     */
    //% block="on moisture level at $pin is below $mlevel"
    export function ifMoisture(pin: AnalogPin, mlevel: Mlevel, handler: () => void) {
        let moistureLevel = getMoisture(pin)
        if (moistureLevel <= mlevel) {
                handler()
        }
       
        
    }

    /**
     * Displays the read moisture level on a vertical bar graph up to full scale.
     */
    //% block="display moisture level at %pin"
    //% weight=40
    export function displayMoisture(pin: AnalogPin): void {
        led.plotBarGraph(getMoisture(pin), 800)
    }

}
