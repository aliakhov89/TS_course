// Basic interface
interface IComputer {
    model: string;
    hdd: number;
    turnOn(): void;
}

// Interface that extends IComputer
interface ILaptop extends IComputer {
    batteryLife: number;
    checkBattery(): void;
}

// Implementation of the ILaptop interface in a class
class NewLaptop implements ILaptop {
    model: string;
    hdd: number;
    batteryLife: number;

    constructor(model: string, hdd: number, batteryLife: number) {
        this.model = model;
        this.hdd = hdd;
        this.batteryLife = batteryLife;
    }

    turnOn() {
        console.log(`Laptop ${this.model} is turning on...`);
    }

    checkBattery() {
        console.log(`Battery life: ${this.batteryLife} hours`);
    }
}

// Creating an instance of the class that implements the interface
const myLaptop = new NewLaptop("Dell XPS", 512, 10);
myLaptop.turnOn(); // Laptop Dell XPS is turning on...
myLaptop.checkBattery(); // Battery life: 10 hours


// Interface for describing the engine
interface IEngine {
    engineType: string;
    horsepower: number;
    startEngine(): void;
}

// Interface for describing the wheels
interface IWheels {
    wheelCount: number;
    wheelSize: number;
    rotateWheels(): void;
}

// Interface that extends both previous interfaces
interface ICar extends IEngine, IWheels {
    model: string;
    drive(): void;
}

// Class implementing the ICar interface
class Car implements ICar {
    model: string;
    engineType: string;
    horsepower: number;
    wheelCount: number;
    wheelSize: number;

    constructor(model: string, engineType: string, horsepower: number, wheelCount: number, wheelSize: number) {
        this.model = model;
        this.engineType = engineType;
        this.horsepower = horsepower;
        this.wheelCount = wheelCount;
        this.wheelSize = wheelSize;
    }

    startEngine() {
        console.log(`The ${this.engineType} engine with ${this.horsepower} horsepower starts.`);
    }

    rotateWheels() {
        console.log(`The wheels of the car are rotating with size ${this.wheelSize} inches.`);
    }

    drive() {
        console.log(`The ${this.model} car is driving!`);
    }
}

// Creating an instance of a car
const myCar = new Car("Tesla Model 3", "Electric", 450, 4, 18);
myCar.startEngine(); // The Electric engine with 450 horsepower starts.
myCar.rotateWheels(); // The wheels of the car are rotating with size 18 inches.
myCar.drive(); // The Tesla Model 3 car is driving!
