class Vehicle {
    color?: string;
    wheelsAmount?: number;
    maxSpeed?: number;

    constructor();
    constructor(color: string, wheelsAmount: number, maxSpeed: number);
    constructor(color?: string, wheelsAmount?: number, maxSpeed?: number) {
        if (typeof color === 'string') {
            this.color = color;
        }
        if (typeof wheelsAmount === 'number') {
            this.wheelsAmount = wheelsAmount;
        }
        if (typeof maxSpeed === 'number') {
            this.maxSpeed = maxSpeed;
        }
    }
}

const truck = new Vehicle('Blue', 6,  130);

const sedan = new Vehicle();

console.log(truck); // Vehicle { color: 'Blue', wheelsAmount: 6, maxSpeed: 130 }
console.log(sedan); // Vehicle { }