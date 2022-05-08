/**
 * @description 蛮力法
 */
function twoSum01(nums: number[], target: number): number[] {
  let numsLen: number = nums.length;
  for (let i = 0; i < numsLen; i++) {
    for (let j = i+1; j < numsLen; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

/**
 * @description Map
 */
function twoSum02(nums: number[], target: number): number[] {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] !== undefined) return [i, map[num]];
    map[target - num] = i;
  }
}

export { twoSum01, twoSum02 };