export function playWith(obj) {
    obj.makeSound();
}

class Animal{
    constructor(weightValue) {
        this.weight = weightValue;
    }
    makeSound() {
        alert("...");
    }
}

export class Dog extends Animal{
    constructor(weightValue, locationName) {
        super(weightValue);
        this.location = locationName;
    }
    makeSound() {
        alert("汪！ 汪！");
    }
}