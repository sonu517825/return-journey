console.log(`\nThis is Task 1 \n`)

const ArrayManipulation = (array = []) => {

    let finalResult = []

    for (const element of array) {
        if (!finalResult.includes(element)) {
            finalResult.push(element);
        }
    }

    return finalResult

}

const array = [7, 2, 4, 1, 5, 2, 7, 8, 9, 1, 4, 5, 23, 45, 12, 78, 34, 23, 71, 0]

const result = ArrayManipulation(array)

console.log(`Input: ${array} \n`,)
console.log(`Unique Element: ${result} \n`)
