//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//
//
//
// 示例:
//
// 给定 nums = [2, 7, 11, 15], target = 9
//
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
//
// Related Topics 数组 哈希表


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* js进阶解法【参考】
*  @description
*  根据题意：一个数值不会超过2次，即传入的数组为无重复元素的数组
*  方法：使用Map记录索引位置, key => 数组成员，value => 成员对应索引
*  优势：使用map来解决双重for循环时间复杂度过高
*  */
var nums = [2, 7, 11, 15], target = 9;

var twoSum = function (nums, target) {
  // 使用map记录
  const getMap = () => {
    const valMap = new Map();
    nums.forEach((item, index) => valMap.set(item, index))
    return valMap;
  }
  const len = nums.length;
  // 传递参数数组长度校验
  if (len < 2) return [];
  if (len === 2) {
    if (nums[0] + nums[1] === target) {
      return [0, 1]
    } else {
      return []
    }
  }

  const valMap = getMap(nums);
  for (let i = 0; i < len; i++) {
    const left = target - nums[i];
    if (valMap.has(left)) { // 判断是否有值，从而间接获取另一个索引
      const targetIndex = valMap.get(left);
      if (targetIndex > i) {
        return [i, targetIndex];
      }
    }
  }
  return [];
};
//leetcode submit region end(Prohibit modification and deletion)
/* 我的解法 */
/*
var twoSum = function (nums, target) {
  let numsLen = nums.length;
  let targetArr = [];
  if (nums[0] + nums[1] === target) {
    targetArr.splice(0, 0, 0, 1);
    return targetArr;
  }
  for (var i = 0; i < numsLen - 1; i++) {
    for (var j = i + 1; j < numsLen; j++) {
      if (nums[i] + nums[j] === target) {
        targetArr.splice(0, 0, i, j);
        break;
      }
    }

  }
  return targetArr;
};*/
