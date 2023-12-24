console.log(`\nThis is Task 3 \n`)

const LogicalOperations = (array1 = [], array2 = []) => {

    let finalResult = []

    let findLoopArray = array1
    let checkSet = new Set(array2)

    if (array2.length > findLoopArray.length) {
        findLoopArray = array2
        checkSet = new Set(array1)
    }

    for (const ele of findLoopArray) {
        if (checkSet.has(ele)) {
            finalResult.push(ele)
        }
    }

    return finalResult
}

const array1 = [6, 3, 7, 2, 57, 7, 45, 3, 3, 5, 6, 7, 5, 43, 3, 45, 6, 6, 4]

const array2 = [2, 3, 6, 1, 2, 5, 6, 76, 33, 5]

const result = LogicalOperations(array1, array2);

console.log(`Array 1: ${array1} \n`);
console.log(`Array 2: ${array2} \n`);
console.log(`Common Elements: ${result} \n`);
console.log(`Common Unique Elements: ${[...new Set(result)]} \n`);

