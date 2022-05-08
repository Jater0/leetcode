function leetcode1(index) {
  const q = require("./lib/Array/1. Two Sum");
  const nums = [2, 7, 11, 15];
  const target = 9;
  switch (index) {
    case 1:
      return q.twoSum01(nums, target);
    case 2:
      return q.twoSum02(nums, target); 
    default:
      return q.twoSum01(nums, target);
  }
}
exports.leetcode1 = leetcode1;