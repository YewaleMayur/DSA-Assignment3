const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function countFrequency(arr) {
  const frequency = {};
  
  // Loop through the array
  arr.forEach(element => {
    // If the element already exists in the frequency object, increment its count
    if (frequency[element]) {
      frequency[element]++;
    } else {
      // Otherwise, initialize its count to 1
      frequency[element] = 1;
    }
  });
  
  return frequency;
}

const result = countFrequency(arr);
console.log(result);