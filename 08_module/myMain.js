import {Dog, playWith} from "./myLibrary.js"

let dog = new Dog(3, "Tainan");
console.log(dog.weight, dog.location);
dog.makeSound();
playWith(dog);