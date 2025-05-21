class Laptop {
    _model: string;
    _hdd: number;

    set model(dell: string) {
        this._model = dell; // Устанавливаем значение модели
    }

    get model(): string {
        return this._model; // Возвращаем значение модели
    }

    set hdd(size: number) {
        this._hdd = size; // Устанавливаем размер жесткого диска
    }

    get hdd(): number {
        return this._hdd; // Возвращаем размер жесткого диска
    }
}

const laptopDell = new Laptop();
laptopDell.model = 'laptopDell';
laptopDell.hdd = 512; // Пример установки значения для hdd

console.log(laptopDell);
console.log(laptopDell.model); // 'laptopDell'
console.log(laptopDell.hdd); // 512
