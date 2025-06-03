function greet(this: { name: string }) {
    console.log(`Привет, ${this.name}`);
}


function logUser(this: { id: number }) {
    console.log(`User ID: ${this.id}`);
}

const user123 = {
    id: 123,
    log: logUser
};

user123.log();


function sayHello(this: void, name: string) {
    console.log(`Hi, ${name}`);
}

sayHello("Ann");


