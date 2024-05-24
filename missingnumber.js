const arr = [1, 2, 4, 6, 3, 7, 8];

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return totalSum - sum;
}

const missingNumber = findMissingNumber(arr);
console.log("Missing Number:", missingNumber);