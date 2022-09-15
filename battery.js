class Battery {
    energy;
    decreaseEnergy;

    constructor(energy, decreaseEnergy) {
        this.energy = energy;
        this.decreaseEnergy = decreaseEnergy;
    }
    setEnergy(energy){
        this.energy=energy;
    }
    getEnergy(){
        return this.energy;
        if (this.energy>0){
            this.energy--
        }
    }
    setDecreaseEnergy(decreaseEnergy){
        this.decreaseEnergy=decreaseEnergy
    }
    getDecreaseEnergy(){
        return this.decreaseEnergy;
    }
}