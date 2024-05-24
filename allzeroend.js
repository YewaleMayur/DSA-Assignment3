function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Move non-zero elements to the front of the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }

    // Fill the remaining positions with zeros
    while (nonZeroIndex < arr.length) {



        
        arr[nonZeroIndex++] = 0;
    }

    return arr;
}

const arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(moveZerosToEnd(arr)); // Output: [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]
