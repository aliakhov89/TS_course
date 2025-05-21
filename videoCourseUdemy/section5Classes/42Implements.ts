interface IComputer {
    model: string;
    hdd: number;
    turnOn(): void;
}

class Computer implements IComputer {
    model: string;
    hdd: number;

    constructor(model: string, hdd: number) {
        this.model = model;
        this.hdd = hdd;
    }

    turnOn(): void {
        console.log(`Computer ${this.model} is turning on...`);
    }
}

const myComputer = new Computer("Dell XPS", 512);
myComputer.turnOn();
console.log(myComputer.model); 
console.log(myComputer.hdd);