/*
Runtime: 119 ms, faster than 10.19% of JavaScript online submissions for Plus One.
Memory Usage: 38.8 MB, less than 67.90% of JavaScript online submissions for Plus One.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let flag = false
    let lastFlag = false
    const result = digits.reverse().reduce((out, num, index) => {
        let x = num
        if(!index || flag) {
            x = num + 1
        }

        if (x === 10) {
            flag = true
            out.push(0)
        } else {
            flag = false
            out.push(x)
        }
        if (index === digits.length - 1 && flag) {
            lastFlag = true
        }

        return out
    }, []).reverse()

    return lastFlag ? [1, ...result] : result
};



console.log(plusOne([1,2,4])) // [1,2,5]
console.log(plusOne([9])) // [1,0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4]))
