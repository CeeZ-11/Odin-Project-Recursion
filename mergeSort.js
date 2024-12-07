function mergeSort(arr) {
  const sort = [];

  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    let i = 0;
    let j = 0;
    let merged = [];

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    return [...merged, ...left.slice(i), ...right.slice(j)];
  }
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];
console.log(mergeSort(arr));
console.log(mergeSort(arr2));
