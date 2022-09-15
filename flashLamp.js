class FlashLamp {
    setBattery;
    light;
    turnOn;
    turnOff;
    status;
    getBatteryInfo;


    constructor(setBattery, light, turnOn, turnOff, status, getBatteryInfo) {
        this.setBattery = setBattery;
        this.light = light;
        this.turnOn = turnOn;
        this.turnOff = turnOff;
        this.status = status;
        this.getBatteryInfo = getBatteryInfo;
    }
    setSetBattery(setBattery){
        this.setBattery=setBattery;
    }
    getSetBattery(){
        return this.setBattery;
    }
    setLight(light){
        this.light=light;
        if (this.status){
            alert('Lightning')
        }else {
            alert('Not Lightning')
        }
    }
    getLight(){
        return this.light;
    }
    setTurnOn(turnOn){
        this.turnOn=turnOn;
        this.status=true
    }
    getTurnOn(){
        return this.turnOn;
    }
    setTurnOff(turnOff){
        this.turnOff=turnOff;
        this.status=false
    }
    getTurnOff(){
        return this.turnOff
    }
    setGetBatteryInfo(getBatteryInfo){
        this.getBatteryInfo=getBatteryInfo
    }
    getGetBatteryInfo(){
        return this.getBatteryInfo;
    }
}