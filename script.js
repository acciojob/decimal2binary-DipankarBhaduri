function threeSum(arr, target) {
  const result = [];
  arr.sort((a, b) => a - b); // sort the array in ascending order
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicate elements
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === target) {
        result.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left++; // skip duplicate elements
        while (left < right && arr[right] === arr[right - 1]) right--; // skip duplicate elements
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}


module.exports = threeSum;
