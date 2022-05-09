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

function leetcode2() {
  const Q2 = require("./lib/Math/2. Add Two Numbers/index");
  const ListNode = Q2.ListNode
  const L1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const L2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  return Q2.addTwoNumbers(L1, L2);
}
exports.leetcode2 = leetcode2;

function leetcode4() {
  const q = require("./lib/Array/4. Median of Two Sorted Arrays");
  const arr1 = [1, 3];
  const arr2 = [2];
  return q.findMedianSortedArrays(arr1, arr2);
}
exports.leetcode4 = leetcode4;

function leetcode442() {
  const q = require("./lib/Array/442. Find All Duplicates in an Array");
  const data = [4,3,2,7,8,2,3,1];
  return q.findDuplicates(data);
}
exports.leetcode442 = leetcode442;