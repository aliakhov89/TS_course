abstract class Animal {
    constructor(public name: string) {}

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}


/*
makeSound() — абстрактный метод (без тела)

move() — обычный метод с реализацией

Нельзя создать экземпляр Animal напрямую: new Animal("Fox") ❌ ошибка
 */


class Cat extends Animal {
    makeSound(): void {
        console.log("Miu!");
    }
}

const myCat = new Cat("Barsic");
myCat.move();      // Barsic is moving.
myCat.makeSound(); // Miu!
