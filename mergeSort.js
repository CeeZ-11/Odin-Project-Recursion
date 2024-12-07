function mergeSort(arr) {
  const sort = [];

  // Base case: If the array has 1 or no elements, it is already sorted.
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array.
  const middle = Math.floor(arr.length / 2);

  // Split the array into two halves: left and right.
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the left and right halves, then merge them.
  return merge(mergeSort(left), mergeSort(right));

  // Helper function to merge two sorted arrays into one sorted array.
  function merge(left, right) {
    let i = 0; // Pointer for the left array.
    let j = 0; // Pointer for the right array
    let merged = []; // Array to store the merged result.

    // Compare elements from both arrays and add the smaller one to 'merged'.
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]); // Add the element from the left array.
        i++; // Move the pointer in the left array.
      } else {
        merged.push(right[j]); // Add the element from the right array.
        j++; // Move the pointer in the right array.
      }
    }

    // Add any remaining elements from the left array (if any).
    // Since the arrays are already sorted, we can simply slice and add them.
    return [...merged, ...left.slice(i), ...right.slice(j)];
  }
}

// Example arrays to test the mergeSort function.
const arr = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

// Output the sorted arrays to the console.
console.log(mergeSort(arr)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(arr2)); // Output: [79, 100, 105, 110]
