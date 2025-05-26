class Laptop {
    _model: string;
    _hdd: number;

    constructor(model: string, hdd: number) {
        this._model = model;
        this._hdd = hdd;
    }

    set model(dell: string) {
        this._model = dell;
    }

    get model(): string {
        return this._model;
    }

    set hdd(size: number) {
        this._hdd = size;
    }

    get hdd(): number {
        return this._hdd;
    }
}

const laptopDell = new Laptop('initialModel', 256);
laptopDell.model = 'laptopDell';
laptopDell.hdd = 512;

console.log(laptopDell);
console.log(laptopDell.model);
console.log(laptopDell.hdd);
