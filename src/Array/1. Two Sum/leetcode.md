# Two Sum

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

#### Example:
``` md
**Input:** nums = [2, 7, 11, 15], target = 9
**Output:** [0, 1]
**Explanation:** Cuz nums[0] + nums[1] == 9, so return [0, 1]
```

### Map
```js
function twoSum02(nums: number[], target: number): number[] {
  // map大法
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] !== undefined) return [i, map[num]];
    map[target - num] = i;
  }
}
```
Example: current num = nums[i] === 2, target === 9, i === 0
> if `map[num] === undefined`, means the map doesn't have the key **Number-2**, also means the for loop have not found **Number-7** yet
> Cuz, the `map[target - num] = i` is to add the [9-2, 0]
> next time, when the for loop found the **Number-7**, it will find the `map[7]`, if `map[7] !== undefined`, the map[7] is the **i** of **Number-2**