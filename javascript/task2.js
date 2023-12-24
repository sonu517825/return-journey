console.log(`\nThis is Task 2 \n`)

const ObjectOperations = (car1 = {}, car2 = {}) => {

    return { ...car1, ...car2 }

}

const car1 = {
    brand: 'Toyota',
    model: 'Camry',
};

const car2 = {
    year: 2020,
    color: 'Blue',
    fuelType: 'Gasoline'
};

const result = ObjectOperations(car1, car2);

console.log(`Car 1:`, car1, '\n');
console.log(`Car 2:`, car2, '\n');
console.log(`Merged Car:`, result, '\n');
