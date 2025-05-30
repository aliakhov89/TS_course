class Auto {
    public make: string;
    private damages: string[] = [];
    private _model: string;
    protected vehicleMileage: number;

    constructor(make: string, model: string, mileage: number) {
        this.make = make;
        this._model = model;
        this.vehicleMileage = mileage;
    }

    set model(m: string) {
        this._model = m;
    }

    get model() {
        return this._model;
    }

    addDamage(damage: string) {
        this.damages.push(damage);
    }

}

const myAuto = new Auto('Toyota', 'Camry', 150000);
myAuto.addDamage('Scratch on door');
console.log(myAuto);
