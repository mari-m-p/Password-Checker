function minAbsoluteDifference(nums) {
  const n = nums.length / 2;
  let minDiff = Infinity;

  function dfs(index, arr1, arr2) {
    if (index === nums.length) {
      const diff = Math.abs(
        arr1.reduce((acc, num) => acc + num, 0) -
          arr2.reduce((acc, num) => acc + num, 0)
      );
      minDiff = Math.min(minDiff, diff);
      return;
    }

    if (arr1.length < n) {
      arr1.push(nums[index]);
      dfs(index + 1, arr1, arr2);
      arr1.pop();
    }

    if (arr2.length < n) {
      arr2.push(nums[index]);
      dfs(index + 1, arr1, arr2);
      arr2.pop();
    }
  }

  dfs(0, [], []);
  return minDiff;
}

// Test cases
console.log(minAbsoluteDifference([3, 9, 7, 3])); // Output: 2
console.log(minAbsoluteDifference([-36, 36])); // Output: 72
console.log(minAbsoluteDifference([2, -1, 0, 4, -2, -9])); // Output: 0
