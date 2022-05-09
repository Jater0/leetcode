function findDuplicates(nums: number[]): number[] {
  let output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    if (nums[num - 1] > 0) {
      nums[num - 1] = -nums[num - 1];
    } else {
      output.push(num);
    }
  }
  return output;
}

export { findDuplicates };