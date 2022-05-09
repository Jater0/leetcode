# [442. Find All Duplicates in an Array 数组中重复的数据](https://leetcode.cn/problems/find-all-duplicates-in-an-array)

Given an integer array `nums` of length `n` where all the integers of `nums` are in the range `[1, n]` and each integer appears **once** or **twice**, return an array of all the integers that appears **twice**.

You must write an algorithm that runs in `O(n)` time and uses only constant extra space.


#### Example:
``` md
**Input:** nums = [4,3,2,7,8,2,3,1]
**Output:** [2, 3]

**Input:** nums = [1, 1, 2]
**Output:** [1]
```

#### Constraints:

- `n == nums.length`
- `1 <= n <= 105`
- `1 <= nums[i] <= n`
- Each element in `nums` appears **once** or **twice**.

-----

#### Use positive and negative as markers
``` ts
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
```