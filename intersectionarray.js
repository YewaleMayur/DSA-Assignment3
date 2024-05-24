const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];

const intersection = (arr1, arr2) => {
    const intersectionSet = new Set();
    const map = new Map();

    // Map elements of arr1
    arr1.forEach(num => {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    });

    // Check elements of arr2 in map
    arr2.forEach(num => {
        if (map.has(num) && map.get(num) > 0) {
            intersectionSet.add(num);
            map.set(num, map.get(num) - 1);
        }
    });

    return Array.from(intersectionSet);
};

console.log(intersection(arr1, arr2));