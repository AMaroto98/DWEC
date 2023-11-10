import { Animal } from '../model/Animal.js';

export function getAnimals() {

    let animals = [];

    const animal1 = new Animal(1, 'Bob', 'M', null, 'Dog');
    const animal2 = new Animal(2, 'Seb', 'M', 13, 'Cat');
    const animal3 = new Animal(3, 'Pedro', 'M', 16, 'Spider');
    const animal4 = new Animal(4, 'Tobi', 'F', null, 'Dog');
    const animal5 = new Animal(5, 'Pepe', 'M', 23, 'Spider');
    const animal6 = new Animal(6, 'Anubis', 'F', 89, 'Cat');
    const animal7 = new Animal(7, 'Totoro', 'F', 6, 'Horse');

    animals.push(animal1, animal2, animal3, animal4, animal5, animal6, animal7);

    return animals;

}

export function getAnimal(idAnimal) {

    const animals = getAnimals();

    // animals.forEach(animal => {
    //     if (animal.id == idAnimal) {
    //         return animal;
    //     }
    // });

    // Otra forma más óptima
    // return animals.find(function(ani) {
    //     ani.id === idAnimal;
    // })

    return animals.find(ani => ani.id === parseInt(idAnimal));
}

// Esto es de regalo para ver como funciona el filter
function getAllDogs(params) {
    const animals = getAnimals();
    return animals.filter(animal => animal.type === "Dog");
}