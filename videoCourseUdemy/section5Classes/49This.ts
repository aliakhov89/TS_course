class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hi, My name is ${this.name}`);
    }
}

const personAnn = new Person("Ann");
personAnn.sayHello();