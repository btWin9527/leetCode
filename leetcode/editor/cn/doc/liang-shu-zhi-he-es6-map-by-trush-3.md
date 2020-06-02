### 解题思路
根据题意(位置相同且值相同为同一元素)：那么一个数值不会出现超过2次(否则答案不会唯一)，

使用Map记录索引位置，key => 数组成员, value => 成员对应索引, 相同key直接覆盖即可

另: 当前遍历索引值与记录的索引值 不能相同

### 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const getMap = (nums) => {
    const valMap = new Map()
    nums.forEach((item, index) => {
        valMap.set(item, index)
    })
    return valMap
}

var twoSum = function(nums, target) {
    const len = nums.length

    if (len < 2) return []
    if (len === 2) {
        if (nums[0] + nums[1] === target) return [0, 1]
        return []
    }

    const valMap = getMap(nums)
    
    for (let i = 0; i < len; i++) {
        const left = target - nums[i]
        if (valMap.has(left)) {
            const targetIndex = valMap.get(left)
            if (targetIndex > i) {
                return [i, targetIndex]
            }
        }
    }
    return []
}
```