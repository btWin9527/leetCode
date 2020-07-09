//判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
//
// 示例 1:
//
// 输入: 121
//输出: true
//
//
// 示例 2:
//
// 输入: -121
//输出: false
//解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
//
//
// 示例 3:
//
// 输入: 10
//输出: false
//解释: 从右向左读, 为 01 。因此它不是一个回文数。
//
//
// 进阶:
//
// 你能不将整数转为字符串来解决这个问题吗？
// Related Topics 数学
// 👍 1138 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {boolean}
 * @description 回文数：非小数 || 非负数 || 末尾非0 || 正序和倒序一样
 */
var isPalindrome = function (x) {
  if (typeof (x) != 'number' || (x % 1 || x < 0 || !(x % 10)) && x !== 0) {
    return false;
  }
  let strnum = x + '';
  if (strnum.length === 1) {
    return true;
  }
  let flag = true;
  for (let i = 0; i < strnum.length; i++) {
    if (strnum.charAt(i) !== strnum.charAt(strnum.length - 1 - i)) {
      flag = false;
      break;
    }
  }
  return flag;
};
//leetcode submit region end(Prohibit modification and deletion)
