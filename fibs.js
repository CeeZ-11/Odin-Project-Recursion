function fibs(num) {
  let result = [0, 1];

  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

console.log(fibs(11));

function fibsRec(num) {
  let result = [0, 1];

  if (num <= 2) {
    return result;
  }

  result = fibsRec(num - 1);

  result.push(result[result.length - 1] + result[result.length - 2]);

  return result;
}

console.log(fibsRec(11));
