//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
//
// 示例 1:
//
// 输入: 123
//输出: 321
//
//
// 示例 2:
//
// 输入: -123
//输出: -321
//
//
// 示例 3:
//
// 输入: 120
//输出: 21
//
//
// 注意:
//
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
// Related Topics 数学


//leetcode submit region begin(Prohibit modification and deletion)
/* 菜鸟版 */
/**
 * @param {number} x
 * @return {number}
 */
/*var reverse = function (x) {
  if (!x) return 0;
  if ((x > Math.pow(2, 31) - 1) || x < -Math.pow(2, 31)) {
    return 0
  }
  if (x > 0) {
    let arrNum = x.toString().split('');
    let resultNum = Number(arrNum.reverse().join(''));
    return resultNum > Math.pow(2, 31) - 1 ? 0 : resultNum;
  }
  if (x < 0) {
    let arrNum = x.toString().split('');
    arrNum.shift();
    let resultNum = -Number(arrNum.reverse().join(''));
    console.log(resultNum,'resultNum')
    return resultNum < -Math.pow(2, 31) ? 0 : resultNum;
  }
};*/
var reverse = function (x) {
  const INT_MAX = Math.pow(2, 31) - 1; // 最大值
  const INT_MIN = -Math.pow(2, 31); // 最小值
  if (x > INT_MAX || x < INT_MIN || x === 0) return 0;
  let tempnum = Math.abs(x);
  let newnum = 0;
  while (tempnum != 0) {
    newnum = newnum * 10 + tempnum % 10;
    tempnum = Math.floor(tempnum / 10);
  }
  if (newnum > INT_MAX || newnum < INT_MIN) return 0;
  return x > 0 ? newnum : -newnum;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(reverse(-123))
