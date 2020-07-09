### 思路
    由题可知
  >对数字进行反转，且对反转后的数值有一定的限定
  在这里，我把数值按照正数和负数分开处理的
  之后对返回的结果`res`,进行范围判断
  其中，Math.pow(x,y)是返回 x 的 y 次幂

### 代码

```javascript
/**
 * @param {number} x
 * @return {number}
 */
    var reverse = function(x) {  
      let res = '';
      let str = x+''
      if(x>0){
        for(var i = str.length-1;i>=0;i--){
          res+=str[i]
        }
      }else{
        for(var i = str.length-1;i>0;i--){
          res = res+str[i]
        }
        res = -res    
      }

      if(res<Math.pow(-2,31)||res>=Math.pow(2,31)-1){
        return 0
      }
      return res*1  
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
```