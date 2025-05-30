class Dog {
    static species: string = "Canis familiaris"; // static property — species of the dog

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Static method that returns the species
    static getSpecies(): string {
        return Dog.species;
    }

    // Instance method that returns the dog's name
    getName(): string {
        return this.name;
    }
}

// Access static property without creating an instance
console.log(Dog.species); // Canis familiaris

// Create an instance
const myDog = new Dog("Buddy");
console.log(myDog.getName());      // Buddy

// Call static method via the class
console.log(Dog.getSpecies());     // Canis familiaris
