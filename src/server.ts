/*
 * Bryan Pinheiro de Souza
 * JavaScript Best Practices
 */

const animal = 'Dragonfly';
const plant = {
  height: 30,
  name: 'Pinetree',
};

console.log(animal, plant);

if (plant.name === '2') {
  console.log('equal');
}

console.table({
  animal: {
    name: animal,
    'data type': 'animal',
  },
  plant: {
    name: plant.name,
    height: String(plant.height),
    'data type': 'plant',
  },
});