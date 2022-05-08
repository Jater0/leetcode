function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const numsLen = nums1.length + nums2.length;
  let nums = [];
  let index = 0;
  let nums1Index = 0;
  let nums2Index = 0;
  while (index < numsLen) {
    const num1 = nums1?.[nums1Index] ?? Infinity;
    const num2 = nums2?.[nums2Index] ?? Infinity;
    if (num1 <= num2) {
      nums.push(num1);
      ++nums1Index;
    } else {
      nums.push(num2);
      ++nums2Index;
    }
    index++;
  }
  const half = numsLen / 2;
  return (half % 1 === 0.5) ? nums[half - 0.5] : (nums[half] + nums[half - 1]) / 2;
}

export { findMedianSortedArrays };