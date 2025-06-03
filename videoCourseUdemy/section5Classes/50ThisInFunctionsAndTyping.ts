function greet(this: { name: string }) :void {
    console.log(`Привет, ${this.name}`);
}


function logUser(this: { id: number }): void {
    console.log(`User ID: ${this.id}`);
}

const user123 = {
    id: 123,
    log: logUser
};

user123.log();


function sayHello(this: void, name: string): void {
    console.log(`Hi, ${name}`);
}

sayHello("Ann");


