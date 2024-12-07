// Iterative approach to generate the Fibonacci sequence up to `num` terms.
function fibs(num) {
  // Initialize the result array with the first two Fibonacci numbers: 0 and 1.
  let result = [0, 1];

  // Loop starts from index 2 since the first two numbers are already defined.
  for (let i = 2; i < num; i++) {
    // Add the last two numbers in the result array and push the sum to the array.
    result.push(result[i - 1] + result[i - 2]);
  }

  // Return the full Fibonacci sequence.
  return result;
}

// Example: Generate the first 8 Fibonacci numbers iteratively.
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// Recursive approach to generate the Fibonacci sequence up to `num` terms.
function fibsRec(num) {
  // Log a message to show that this step is reached recursively.
  console.log("This was printed recursively");

  // Initialize the result array with the first two Fibonacci numbers.
  let result = [0, 1];

  // Base case: If the desired number of terms is 2 or less, return the initial array.
  if (num <= 2) {
    return result;
  }

  // Recursive step: Get the Fibonacci sequence up to (num - 1) terms.
  result = fibsRec(num - 1);

  // Add the next Fibonacci number (sum of the last two numbers in the sequence).
  result.push(result[result.length - 1] + result[result.length - 2]);

  // Return the complete Fibonacci sequence up to `num` terms.
  return result;
}

// Example: Generate the first 8 Fibonacci numbers recursively.
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
